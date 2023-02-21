import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  statesList: any = ["Telangana", "Andrapradesh", "westbengal"]
  empStatus: any = ['success', 'pending', 'inProgress', 'review'];
  empList: any = [];
  empDetails: any;
  hasEmpDetails: boolean = false;
  employeeForm!: FormGroup;
  isSubmitted: boolean = false;
  constructor(
    private employeeService: EmployeeService,
    private toastr: ToastrService
  ) {
    this.employeeForm = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      lastName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      phoneNumber: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      emailId: new FormControl("", [Validators.required, Validators.email]),
      status: new FormControl("", [Validators.required]),
    })
  }
  ngOnInit(): void {
    this.toastr.success('Hello world!', 'Success');
    // this.toastr.info('Hello world!', 'Toastr fun!');
    // this.toastr.warning('Hello world!', 'Toastr fun!');
    // this.toastr.error('Hello world!', 'Toastr fun!');
    this.loadEmployeeList();
  }
  //loading employee and initizing to employeeList variable
  loadEmployeeList() {
    this.empList = this.employeeService.empList;
  }
  get f() {
    return this.employeeForm.controls
  }; // get all form fields access for template
  submitEmpForm() {
    console.log("form submited");
    console.log(this.employeeForm.valid)
    this.isSubmitted = true;
    if (this.employeeForm.invalid) {
      return
    }
    console.log(this.employeeForm.value);
    const formData: any = this.employeeForm.value;
    console.log(formData);
    const isEmpExist = this.empList.find((el: any) => {
      return el.emailId == formData.emailId;
    });
    //console.log(isEmpExist);
    if (isEmpExist) {
      this.toastr.warning('this mail is already in use', 'warning');
    } else {
      this.empList.push(formData);
      this.toastr.success('New employee is added successfully', 'success');
      this.employeeForm.reset();

    }
  }
  addEmployee() {
    let firstName: any = document.getElementById('firstName');
    let lastName: any = document.getElementById('lastName');
    let phoneNumber: any = document.getElementById('phoneNumber');
    let emailId: any = document.getElementById('emailId');
    let status: any = document.getElementById('status');
    console.log(firstName.value);
    const formData: any = {
      userId: 12,
      firstName: firstName.value,
      lastName: lastName.value,
      phoneNumber: phoneNumber.value,
      emailId: emailId.value,
      status: status.value,
    };
    console.log(formData);
    const isEmpExist = this.empList.find((el: any) => {
      return el.emailId == formData.emailId;
    });
    //console.log(isEmpExist);
    if (isEmpExist) {
      this.toastr.warning('this mail is already in use', 'warning');
    } else {
      this.empList.push(formData);
      this.toastr.success('New employee is added successfully', 'success');
      this.resetEmpForm();

    }
  }
  resetEmpForm() {//we will use reset method to reset the entire form
    let firstName: any = document.getElementById('firstName');
    let lastName: any = document.getElementById('lastName');
    let phoneNumber: any = document.getElementById('phoneNumber');
    let emailId: any = document.getElementById('emailId');
    let status: any = document.getElementById('status');
    firstName.value = '';
    lastName.value = '';
    phoneNumber.value = '';
    emailId.value = '';
    status.value = '';
  }

  //removing employee from employeeList variable
  deleteEmployee(index: number, item: any): void {
    console.log('deleteEmployee is called');
    console.log(index);
    console.log(item);
    this.hasEmpDetails = false;
    const checkconfirm = confirm('Are you sure want to delete this record?');
    if (checkconfirm) {
      this.empList.splice(index, 1);
      this.toastr.error('Employee record is deleted successfully', 'confirmation');

    }
  }


  //reading employee data from employeeList variable
  viewEmployee(index: number, item: any): void {
    console.log('viewEmployee is called');
    console.log(item);
    console.log(index);
    this.empDetails = this.empList[index];
    this.hasEmpDetails = true;
  }
  //updating employee record of employeeList variable
  updateEmployee() { }

}
//  {
//    firstName:'Ramakanth',
//    lastName:'uppu',
//    phoneNumber:1234567890,
//   mailId:'ramkanth@gmail.com',
//   status:"success"
// },
// {
//   firstName:'Dimpii',
//   lastName:'uppunaidi',
//   phoneNumber:9502580621,
//   mailId:'dimpii@gmail.com',
//   status:"pending"
// },
// {
//   firstName:'shruthi',
//   lastName:'naidi',
//   phoneNumber:9502580621,
//   mailId:'shruthi@gmail.com',
//   status:"inProgress"
// },
// ];

