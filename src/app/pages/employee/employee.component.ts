import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UtillsService } from 'src/app/services/utills.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class EmployeeComponent implements OnInit {
  @ViewChild("empDetailsRef") empDetailsRef!:ElementRef;
  @ViewChild("empAddEditRef") empAddEditRef!:ElementRef;
  @ViewChild("empDeleteRef") empDeleteRef!:ElementRef;
  statesList: any = ["Telangana", "Andrapradesh", "westbengal"]
  empStatus: any = ['success', 'pending', 'inProgress', 'review'];
  empList: any = [];
  empDetails: any;
  hasEmpDetails: boolean = false;
  employeeForm!: FormGroup;
  isSubmitted: boolean = false;
  employeeIndex!:number;

  constructor(
    config: NgbModalConfig,
    private employeeService: EmployeeService,
    // private toastr: ToastrService,
    private utillsService: UtillsService,
    private fb:FormBuilder,
    private modalService: NgbModal,
    private router: Router,
  ) {
     // customize default values of modals used by this component tree
     config.backdrop = 'static';
     config.keyboard = false;
    this.employeeForm = new FormGroup({
      // firstName: new FormControl("Shruthi", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      firstName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
       lastName: new FormControl("", [Validators.required, Validators.minLength(3)]),
       phoneNumber: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
       emailId: new FormControl("", [Validators.required, Validators.email]),
       Status: new FormControl("", [Validators.required]),
       address: new FormGroup({
        state: new FormControl('',[Validators.required]),
        district: new FormControl('',[Validators.required]),
        city: new FormControl('',[Validators.required]),
        zipcode: new FormControl('',[Validators.required]),
     }) ,
     department: this.fb.array([this.createDept()]), 
    });
    // this.employeeForm = this.fb.group({
    //   // firstName: new FormControl("Sajjad", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    //   firstName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    //   lastName: ["", [Validators.required,Validators.minLength(3)]],
    //   emailId:["", [Validators.required,Validators.email]],
    //   phoneNo: ["", [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    //   status: ["", [Validators.required]],
    // })
  }
  ngOnInit(): void {
    // this.toastr.success('Hello world!', 'Success');
    // this.toastr.info('Hello world!', 'Toastr fun!');
    // this.toastr.warning('Hello world!', 'Toastr fun!');
    // this.toastr.error('Hello world!', 'Toastr fun!');
    this.loadEmployeeList();
  }
  createDept(): FormGroup {
    const createDeptGroup = this.fb.group({
      deptName: ['', [Validators.required]],
      empRole: ['', [Validators.required]],
    });
    return createDeptGroup;
  }
  get departmentAsArray() {
    return this.employeeForm.controls["department"] as FormArray;
  }
  addNewDept(){
    console.log(this.departmentAsArray.length);
    if(this.departmentAsArray.length == 5){
      this.utillsService.showWarning("You are not allowed to add more then 5 dept","Warning")
    }else{
      this.departmentAsArray.push(this.createDept());
    }
  }
  removeDept(index:number){
    console.log(index)
    this.departmentAsArray.removeAt(index);
  }
  //loading employee and initizing to employeeList variable
  loadEmployeeList() {
    this.empList = this.employeeService.empList;
  }

  // get all form fields access for template
  get f() {
    return this.employeeForm.controls
  }; 

  submitEmpForm() {
    console.log("form submited");
    console.log(this.employeeForm.valid)
    this.isSubmitted = true;
    if (this.employeeForm.invalid) {
      return
    }
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.value.firstName);//doubt
    console.log(this.employeeForm.get('firstName')?.value);
    const formData: any = this.employeeForm.value;
    console.log(formData);
    const isEmpExist = this.empList.find((el: any) => {
      return el.emailId == formData.emailId;
    });
    //console.log(isEmpExist);
    if (isEmpExist) {
      this.utillsService.showWarning('this mail is already in use', 'warning');
    } else {
      this.empList.push(formData);
      this.utillsService.showSuccess('New employee is added successfully', 'success');
      this.employeeForm.reset();

      //patchValue examples-1
      // this.employeeForm.patchValue({  
      //      "firstName":"Shruthi",
      //      "lastName":"naidi"
      // }); 

           //patchValue examples-2
          // this.employeeForm.get('firstName')?.patchValue('Shruthi');
          // this.employeeForm.get('lastName')?.patchValue('naidi');

    }
  }
  // add employee to employeeList variables
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
      this.utillsService.showWarning('this mail is already in use', 'warning');
    } else {
      this.empList.push(formData);
      this.utillsService.showSuccess('New employee is added successfully', 'success');
      this.resetEmpForm();

    }
  }

//we will use reset method to reset the entire form
  resetEmpForm() {
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
  showEmpDeleteModal(index: number, item: any){
    this.employeeIndex = index;
    this.modalService.open(this.empDeleteRef);
  }

  //removing employee from employeeList variable
  deleteEmployee(): void {
    console.log(this.employeeIndex);
    this.empList.splice(this.employeeIndex, 1);
    this.modalService.dismissAll();
    this.utillsService.showSuccess('Employee record deleted successfully','Success');
  // deleteEmployee(index: number, item: any): void {
  //   console.log('deleteEmployee is called');
  //   console.log(index);
  //   console.log(item);
  //   this.hasEmpDetails = false;
  //   const checkconfirm = confirm('Are you sure want to delete this record?');
  //   if (checkconfirm) {
  //     this.empList.splice(index, 1);
  //     this.utillsService.showSuccess('Employee record is deleted successfully', 'confirmation');

  //   }
   }
  addEditEmp(){
    // this.router.navigate(['/add-employee']);

    //show add popup modal
    this.modalService.open(this.empAddEditRef,{ fullscreen: true })
  }


  //reading employee data from employeeList variable
  viewEmployee(index: number, item: any): void {
    console.log('viewEmployee is called');
    // console.log(item);
    console.log(index);
    this.empDetails = this.empList[index];
    // this.hasEmpDetails = true;
    this.modalService.open(this.empDetailsRef);
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

