import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  employees: Employee[];
  companyForm: FormGroup;
  constructor() {
    this.employees = [];
    this.companyForm = new FormGroup({
      companyName: new FormControl('', { nonNullable: true }),
      companyNumber: new FormControl('', { nonNullable: true }),
      companyAddress: new FormControl('', { nonNullable: true }),
    });
  }
  addNewEmployee() {
    this.employees.push(new Employee());
    console.log(this.employees);
  }

  saveForm() {
    console.log(this.companyForm);
  }
}

class Employee {

}
