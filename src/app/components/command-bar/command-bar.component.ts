import { Component, OnInit } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {OptionsDialogComponent} from '../dialogs/options-dialog/options-dialog.component';
import {CreateDialogComponent} from '../dialogs/create-dialog/create-dialog.component';
import {EditDialogComponent} from '../dialogs/edit-dialog/edit-dialog.component';
import {WorkspaceService} from '../../services/workspace.service';
import {FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {Session} from '../../models/session';

interface GlobalFilters {
  search: string;
  tags: string[];
}

export const globalFilteredSessions = new BehaviorSubject<Session[]>([]);

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {

  filterForm = new FormGroup({
    search: new FormControl(''),
    tags: new FormControl([])
  });

  constructor(private bsModalService: BsModalService, private workspaceService: WorkspaceService) { }

  ngOnInit(): void {

    this.filterForm.valueChanges.subscribe((values: GlobalFilters) => {
      globalFilteredSessions.next(this.workspaceService.sessions.filter(session => {
        if(values.search === '') {
          return session;
        }
        return session.sessionName.toLowerCase().indexOf(values.search.toLowerCase()) > -1;
      }));
    });

  }

  showOptionDialog() {
    this.bsModalService.show(OptionsDialogComponent, { animated: false, class: 'confirm-modal'});
  }

  showCreateDialog() {
    this.bsModalService.show(CreateDialogComponent, { animated: false, class: 'confirm-modal'});
  }

  showEditDialog() {
    this.bsModalService.show(EditDialogComponent, { animated: false, class: 'confirm-modal'});
  }
}
