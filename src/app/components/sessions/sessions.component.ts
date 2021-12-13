import {Component, OnInit} from '@angular/core';
import {WorkspaceService} from '../../services/workspace.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../services/app.service';
import {HttpClient} from '@angular/common/http';
import {BsModalService} from 'ngx-bootstrap/modal';
import {compactMode, globalFilteredSessions} from '../command-bar/command-bar.component';
import {Session} from '../../models/session';
import {Observable} from 'rxjs';

export const optionBarIds = {};

@Component({
  selector: 'app-session',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  eGlobalFilteredSessions: Session[];
  eCompactMode: boolean;

  // Data for the select
  modalAccounts = [];
  currentSelectedColor;
  currentSelectedAccountNumber;

  // Ssm instances
  ssmloading = true;
  ssmRegions = [];
  instances = [];


  showOnly = 'ALL';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public workspaceService: WorkspaceService,
    private httpClient: HttpClient,
    private modalService: BsModalService,
    private appService: AppService
  ) {
    globalFilteredSessions.subscribe(value => {
      this.eGlobalFilteredSessions = value;
    });
    compactMode.subscribe(value => {
      this.eCompactMode = value;
    });
  }

  ngOnInit() {
    // Set regions for ssm
    this.ssmRegions = this.appService.getRegions();
  }

  /**
   * Go to Account Management
   */
  createAccount() {
    // Go!
    this.router.navigate(['/managing', 'create-account']).then(_ => {});
  }

  setVisibility(name) {
    if (this.showOnly === name) {
      this.showOnly = 'ALL';
    } else {
      this.showOnly = name;
    }
  }
}
