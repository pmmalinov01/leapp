import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SessionComponent} from './session/session.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import { SessionCardComponent } from './session-card/session-card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { FilteringPipe } from './session/filtering.pipe';
import { OrderingPipe } from './session/ordering.pipe';
import {DetailPipe} from './session-card/detail.pipe';
import {QueryingPipe} from './session/querying.pipe';
import {ComponentsModule} from "../components.module";

@NgModule({
  declarations: [
    SessionComponent,
    SessionCardComponent,
    FilteringPipe,
    OrderingPipe,
    QueryingPipe,
    DetailPipe
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    InfiniteScrollModule
  ]
})
export class SessionModule { }
