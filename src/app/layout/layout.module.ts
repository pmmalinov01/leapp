import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../components/shared/shared.module';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { MainLayoutComponent } from './main-layout/main-layout.component';


@NgModule({
  declarations: [ MainLayoutComponent ],
  exports: [],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    TranslateModule,
    BsDropdownModule.forRoot(),
    RouterModule,
    TooltipModule,
    SharedModule
  ]
})
export class LayoutModule { }
