import {Component, OnInit, ViewChild} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {OptionsDialogComponent} from '../dialogs/options-dialog/options-dialog.component';
import {CreateDialogComponent} from '../dialogs/create-dialog/create-dialog.component';
import {EditDialogComponent} from '../dialogs/edit-dialog/edit-dialog.component';
import {WorkspaceService} from '../../services/workspace.service';
import {FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {Session} from '../../models/session';
import {MatMenuTrigger} from "@angular/material/menu";

interface GlobalFilters {
  searchFilter: string;
  dateFilter: boolean;
  providerFilter: {name: string; value: boolean}[];
  tags: string[];
}

export const globalFilteredSessions = new BehaviorSubject<Session[]>([]);
export const compactMode = new BehaviorSubject<boolean>(false);

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {

  @ViewChild(MatMenuTrigger)
  trigger: MatMenuTrigger;

  filterForm = new FormGroup({
    searchFilter: new FormControl(''),
    dateFilter: new FormControl(true),

    providerFilter: new FormControl([]),
    'microsoft azure': new FormControl(false),
    'amazon aws': new FormControl(false),

    tags: new FormControl([])
  });

  providers: {name: string; value: boolean}[] = [
    { name: 'Amazon AWS', value: false },
    { name: 'Microsoft Azure', value: false }
  ];

  filterExtended: boolean;
  compactMode: boolean;

  constructor(private bsModalService: BsModalService, private workspaceService: WorkspaceService) {
    this.filterExtended = false;
    this.compactMode = false;
    globalFilteredSessions.next(this.workspaceService.sessions);
  }

  ngOnInit(): void {

    this.filterForm.valueChanges.subscribe((values: GlobalFilters) => {
      console.log(values);

      if(values.searchFilter === '') {
        return globalFilteredSessions.next(this.workspaceService.sessions);
      } else {
        globalFilteredSessions.next(this.workspaceService.sessions.filter(session => session.sessionName.toLowerCase().indexOf(values.searchFilter.toLowerCase()) > -1));
      }
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

  toggleCompactMode() {
    this.compactMode = !this.compactMode;
    compactMode.next(this.compactMode);
  }

  toggleFilters() {
    this.filterExtended = !this.filterExtended;
  }

  toggleDateFilter() {
    this.filterForm.get('dateFilter').setValue(!this.filterForm.get('dateFilter').value);
  }

  providerChange() {
    this.filterForm.get('providerFilter').setValue(this.providers);
  }
}
