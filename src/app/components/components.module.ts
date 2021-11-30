import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '../layout/layout.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ConfirmationDialogComponent} from "./dialogs/confirmation-dialog/confirmation-dialog.component";
import {ProfilePageComponent} from "../temp/profile-page/profile-page.component";
import {InputDialogComponent} from "./dialogs/input-dialog/input-dialog.component";
import {SnackbarComponent} from "./snackbar/snackbar.component";
import {UpdateDialogComponent} from "./dialogs/update-dialog/update-dialog.component";
import {ModalModule} from "ngx-bootstrap/modal";
import {NgxJsonViewerModule} from "ngx-json-viewer";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [ ConfirmationDialogComponent, ProfilePageComponent, InputDialogComponent, UpdateDialogComponent, SnackbarComponent ],
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
    MatButtonModule,
  ],
  exports: [ConfirmationDialogComponent, InputDialogComponent]
})
export class ComponentsModule { }
