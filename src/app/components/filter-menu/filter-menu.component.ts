import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss']
})
export class FilterMenuComponent implements OnInit {

  @ViewChild(MatMenuTrigger)
  trigger: MatMenuTrigger;

  @Input()
  callback: any;

  @Input()
  name: string;

  @Input()
  icon: string;

  @Input()
  data: { id?: string; name: string; value: boolean; show?: boolean }[];

  @Input()
  form: FormGroup;

  @Input()
  control: string;

  @Input()
  searchable: boolean;

  constructor() {
    this.searchable = false;
  }

  ngOnInit(): void {
    this.data = this.data.map(o => {
      o.show = true;
      return o;
    });
  }

  updateValue(event: any, data: { id?: string; name: string; value: boolean }[], form: FormGroup) {
    data = data.map(o => ({ id: o.id, name: o.name, value: o.value }));
    form.get(this.control).setValue(data);
  }

  searchContent(event: any) {
    console.log(event.target.value);
    this.data = this.data.map(o => {
      o.show = (o.name.toLowerCase().indexOf(event.target.value) > -1);
      return o;
    });
  }

  applyCallback(event: MouseEvent, data: { id?: string; name: string; value: boolean; show?: boolean }[], form: FormGroup) {
    if(this.callback) {
      this.callback(event, data, form);
    }
  }
}
