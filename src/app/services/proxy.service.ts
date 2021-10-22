import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppService} from './app.service';
import {WorkspaceService} from './workspace.service';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  constructor(private appService: AppService, private workspaceService: WorkspaceService) {}

  configureBrowserWindow(browserWindow: any): void {
    const workspace = this.workspaceService.get();

    let proxyUrl;
    let proxyPort;
    let proxyProtocol;

    if (workspace.proxyConfiguration) {
      proxyUrl = workspace.proxyConfiguration.proxyUrl;
      proxyPort = workspace.proxyConfiguration.proxyPort;
      proxyProtocol = workspace.proxyConfiguration.proxyProtocol;
    }

    if (proxyUrl !== undefined && proxyUrl !== null && proxyUrl !== '') {
      const rules = `http=${proxyProtocol}://${proxyUrl}:${proxyPort};https=${proxyProtocol}://${proxyUrl}:${proxyPort}`;
      browserWindow.webContents.session.setProxy({
        proxyRules: rules
      });
    }
  }

  getHttpClientOptions(url: string): any {
    const options = this.appService.getUrl().parse(url);
    const workspace = this.workspaceService.get();

    let proxyUrl;
    let proxyPort;
    let proxyProtocol;
    let proxyUsername;
    let proxyPassword;

    if (workspace && workspace.proxyConfiguration) {
      proxyUrl = workspace.proxyConfiguration.proxyUrl;
      proxyProtocol = workspace.proxyConfiguration.proxyProtocol;
      proxyPort = workspace.proxyConfiguration.proxyPort;
      proxyUsername = workspace.proxyConfiguration.username;
      proxyPassword = workspace.proxyConfiguration.password;
    }

    if (proxyUrl !== undefined && proxyUrl !== null && proxyUrl !== '') {
      let rule = `${proxyProtocol}://${proxyUrl}:${proxyPort}`;
      if (proxyUsername !== undefined && proxyUsername !== null && proxyUrl !== '' &&
        proxyPassword !== undefined && proxyPassword !== null && proxyPassword !== '') {
        rule = `${proxyProtocol}://${proxyUsername}:${proxyPassword}@${proxyUrl}:${proxyPort}`;
      }

      const httpsProxyAgent = this.appService.getHttpsProxyAgent();
      options.agent = new httpsProxyAgent(rule);
      options.timeout = environment.timeout;
    }

    return options;
  }

  get(url: string, resCallback: (res: any) => any, errCallback: (err: any) => any, options?: any): void {
    let opts = this.getHttpClientOptions(url);
    if(options) {
      opts = Object.assign(options, opts);
    }
    this.appService.getFollowRedirects().https.get(opts, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () =>{
        console.log(body);
        resCallback(body.toString());
      });
    }).on('error', (err) => errCallback(err)).end();
  }
}
