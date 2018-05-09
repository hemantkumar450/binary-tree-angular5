import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../models/person.model';


@Component({
  selector: 'app-child-component',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Input() personArray: Array<Person> = [];
  @Input() person: Person = new Person();
  @Output() deleteRow: EventEmitter<any> = new EventEmitter();
  @Output() addRow: EventEmitter<any> = new EventEmitter();

  constructor() { }

  addChild(item) {
    this.addRow.emit(item);
  }

  deleteChild(item) {
    if (item.parentId === null) {
      this.array = [];
      this.deleteRow.emit(true);
      return;
    }

    const arr = this.array.map(x => Object.assign({}, x));
    arr.forEach((element, index) => {
      if (element.parentId === item.id) {
        let indexValue = this.array.findIndex(i => i.parentId === item.id);
        this.array.splice(indexValue, 1);
      }
      if (element.id === item.id) {
        let indexValue = this.array.findIndex(i => i.id === item.id);
        this.array.splice(indexValue, 1);
      }
    });
  }

}	