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

  onChangeStartDate(event: any, index: number) {
    console.log(event.target.value);
    // this.employeeList.value[index].fromDate = event.target.value;
    if (new Date(event.target.value) > new Date(this.employeeList.at(index).get('toDate')?.value)) {
      this.employeeList.at(index).get('toDate')?.setValue(null);
    }
  }

  saveForm() {
    console.log(this.companyForm);
  }

  trackByFn(index: number, item: any) {
    return index;
  }
}

export interface Employee {
  name: string;
  fromDate: string;
  toDate: string;
  salary: string;
  occupation: string;
}
