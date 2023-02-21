import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// @Injectable()
export class EmployeeService {

empList: any = [
  {
    
    firstName: 'Ramakanth',
    lastName: 'uppu',
    phoneNumber: '1234567890',
    emailId:"ramakanth@gmail.com",
      status:"success"
  },
  {
     
    firstName: 'Dimpii',
    lastName: 'uppunaidi',
    phoneNumber: '9502580621',
    emailId: 'dimpii@gmail.com',
    status:"pending"
  },
  {
   
    firstName: 'shruthi',
    lastName: 'naidi',
    phoneNumber: '9502580621',
    emailId: 'shruthi@gmail.com',
     status:"inProgress"
  },
];
 constructor() { }
  getAllEmpData(){
    return this.empList;
  }
  getEmpDataBasedOnIndex(index:number):any{
    return this.empList[index]
  }
  removeEmpDataBasedOnIndex(index:number):any{
    this.empList.splice(index,1);
}
}
