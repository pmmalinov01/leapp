import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ConfirmationDialogComponent} from './dialogs/confirmation-dialog/confirmation-dialog.component';
import {ProfilePageComponent} from '../to-be-moved/profile-page/profile-page.component';
import {InputDialogComponent} from './dialogs/input-dialog/input-dialog.component';
import {SnackbarComponent} from './snackbar/snackbar.component';
import {UpdateDialogComponent} from './dialogs/update-dialog/update-dialog.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {SessionComponent} from './sessions/session/session.component';
import {SessionCardComponent} from './sessions/session-card/session-card.component';
import {FilteringPipe} from './sessions/session/pipes/filtering.pipe';
import {OrderingPipe} from './sessions/session/pipes/ordering.pipe';
import {QueryingPipe} from './sessions/session/pipes/querying.pipe';
import {DetailPipe} from './sessions/session-card/detail.pipe';
import { CommandBarComponent } from './command-bar/command-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {OptionsDialogComponent} from "./dialogs/options-dialog/options-dialog.component";

@NgModule({
  declarations: [
    SessionComponent,
    SessionCardComponent,
    FilteringPipe,
    OrderingPipe,
    QueryingPipe,
    DetailPipe,
    ConfirmationDialogComponent,
    ProfilePageComponent,
    InputDialogComponent,
    UpdateDialogComponent,
    SnackbarComponent,
    CommandBarComponent,
    SideBarComponent,
    OptionsDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgxJsonViewerModule,
    MatTabsModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [ConfirmationDialogComponent, InputDialogComponent, CommandBarComponent, SideBarComponent, SessionComponent]
})
export class ComponentsModule { }
