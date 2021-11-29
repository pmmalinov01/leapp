import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmationDialogComponent} from './dialogs/confirmation-dialog/confirmation-dialog.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {InputDialogComponent} from './dialogs/input-dialog/input-dialog.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';
import { UpdateDialogComponent } from './dialogs/update-dialog/update-dialog.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SnackbarComponent } from './snackbar/snackbar.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ConfirmationDialogComponent, ProfilePageComponent, InputDialogComponent, UpdateDialogComponent, SnackbarComponent],
    imports: [CommonModule, TooltipModule.forRoot(), BsDropdownModule.forRoot(), ModalModule.forRoot(), ReactiveFormsModule, FormsModule, NgxJsonViewerModule, NgSelectModule, MatTabsModule, MatIconModule, MatCheckboxModule, MatButtonModule],
  exports: [ConfirmationDialogComponent, InputDialogComponent]
})
export class SharedModule { }
