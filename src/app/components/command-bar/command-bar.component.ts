import { Component, OnInit } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {OptionsDialogComponent} from '../dialogs/options-dialog/options-dialog.component';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {

  constructor(private bsModalService: BsModalService) { }

  ngOnInit(): void {
  }

  showDialog() {
    this.bsModalService.show(OptionsDialogComponent);
  }
}
