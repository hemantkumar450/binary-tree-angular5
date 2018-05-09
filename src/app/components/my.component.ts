import { Component } from '@angular/core';
import { Person } from './models/person.model';


@Component({
	selector: 'app-my-component',
	templateUrl: 'my.component.html'
})
export class MyComponent {

	persons: Array<Person> = [{ id: 1, level: 1, parentId: null, name: 'mohan' },
	{ id: 2, level: 2, parentId: 1, name: 'Suresh' },
	{ id: 3, level: 2, parentId: 1, name: 'Mahesh' },
	{ id: 4, level: 3, parentId: 2, name: 'Prakash' },
	{ id: 5, level: 3, parentId: 2, name: 'Amit' },
	{ id: 6, level: 3, parentId: 3, name: 'Ankit' },
	{ id: 7, level: 3, parentId: 3, name: 'Rahul' }]

	isActive: boolean = false;
	name: string = '';
	node: Person = new Person();
	isShowJson: boolean = false;

	constructor() { }

	deleteRow() {
		this.isActive = true;
		this.persons = [];
	}

	addRow(item) {
		this.node.id = this.persons.length + 1;
		this.node.level = item.level + 1;
		this.node.parentId = item.id;
		this.isActive = true;
	}

	saveNode() {
		if (this.persons.length === 0) {
			this.node.id = this.persons.length + 1;
			this.node.level = 1;
			this.node.parentId = null;
		}
		let item: Person = this.node;
		this.persons.splice(this.persons.length, 0, item);
		this.isActive = false;
		this.node = new Person();
	}

	showJson() {
		this.isShowJson = !this.isShowJson;
	}

	cancel() {
		this.isActive = false;
	}

}
