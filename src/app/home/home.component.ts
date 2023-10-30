import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  employees: Employee[];
  companyForm: FormGroup;

  private fb = inject(FormBuilder);
  constructor() {
    this.employees = [];
    this.companyForm = new FormGroup({
      companyName: new FormControl('', { nonNullable: true }),
      companyNumber: new FormControl('', { nonNullable: true }),
      companyAddress: new FormControl('', { nonNullable: true }),
      employees: this.fb.array([]),
    });
  }

  get employeeList() {
    return this.companyForm.controls['employees'] as FormArray;
  }

  addNewEmployee() {
    const employees = this.employeeList;
    employees.push(
      this.fb.group({
        name: '',
        fromDate: '',
        toDate: '',
        salary: '',
        occupation: '',
      })
    );
  }

  onChangeDate(event: any, index: number) {
    console.log(event.target.value);
    // this.employeeList.value[index].fromDate = event.target.value;
  }

  saveForm() {
    console.log(this.companyForm);
  }
}

export interface Employee {
  name: string;
  fromDate: string;
  toDate: string;
  salary: string;
  occupation: string;
}
