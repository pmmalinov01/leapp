import { Component, OnInit } from '@angular/core';
import {compactMode} from '../../components/command-bar/command-bar.component';
import {ElectronService} from '../../services/electron.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  _compactMode: boolean;

  constructor(private electronService: ElectronService) {
    compactMode.subscribe(value => {
      this._compactMode = value;
      if (value) {
        this.electronService.currentWindow.setMinimumSize(560, 680);
        this.electronService.currentWindow.setSize(560, 680);
      } else {
        this.electronService.currentWindow.setMinimumSize(1200, 680);
        this.electronService.currentWindow.setSize(1200, 680);
      }
    });
  }

  ngOnInit(): void {
  }

}
