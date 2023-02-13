import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  statesList:any = ["Telangana","Andrapradesh","westbengal"]
  empList: any = [
    {
      
      firstName: 'Ramakanth',
      lastName: 'uppu',
      phoneNumber: '1234567890',
      mailId:"ramakanth@gmail.com",
      
    },
    {
     
      firstName: 'Dimpii',
      lastName: 'uppu',
      phoneNumber: '9502580621',
      emailAddress: 'dimpii@gmail.com',
    },
    {
     
      firstName: 'shruthi',
      lastName: 'uppu',
      phoneNumber: '9502580621',
      emailAddress: 'shruthi@gmail.com',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
