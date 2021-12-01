import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '../layout/layout.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ConfirmationDialogComponent} from "./dialogs/confirmation-dialog/confirmation-dialog.component";
import {ProfilePageComponent} from "../to-be-moved/profile-page/profile-page.component";
import {InputDialogComponent} from "./dialogs/input-dialog/input-dialog.component";
import {SnackbarComponent} from "./snackbar/snackbar.component";
import {UpdateDialogComponent} from "./dialogs/update-dialog/update-dialog.component";
import {ModalModule} from "ngx-bootstrap/modal";
import {NgxJsonViewerModule} from "ngx-json-viewer";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {SessionComponent} from "./session/session/session.component";
import {SessionCardComponent} from "./session/session-card/session-card.component";
import {FilteringPipe} from "./session/session/filtering.pipe";
import {OrderingPipe} from "./session/session/ordering.pipe";
import {QueryingPipe} from "./session/session/querying.pipe";
import {DetailPipe} from "./session/session-card/detail.pipe";

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
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
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
  exports: [ConfirmationDialogComponent, InputDialogComponent]
})
export class ComponentsModule { }
