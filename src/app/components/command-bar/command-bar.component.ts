import { Component, OnInit } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {OptionsDialogComponent} from '../dialogs/options-dialog/options-dialog.component';
import {CreateDialogComponent} from "../dialogs/create-dialog/create-dialog.component";

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {

  constructor(private bsModalService: BsModalService) { }

  ngOnInit(): void {
  }

  showOptionDialog() {
    this.bsModalService.show(OptionsDialogComponent, { animated: false, class: 'confirm-modal'});
  }

  showCreateDialog() {
    this.bsModalService.show(CreateDialogComponent, { animated: false, class: 'confirm-modal'});
  }
}
