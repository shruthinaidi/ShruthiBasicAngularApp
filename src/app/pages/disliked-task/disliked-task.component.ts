import { Component, OnInit } from '@angular/core';
 import { EmployeeService } from  'src/app/services/employee.service';
@Component({
  selector: 'app-disliked-task',
  templateUrl: './disliked-task.component.html',
  styleUrls: ['./disliked-task.component.scss']
})
export class DislikedTaskComponent implements OnInit {
   empData: any = [];
  constructor(private employeeService:EmployeeService) { 
     this.empData = this.employeeService.empList;
  }

  ngOnInit(): void {
  }

}
