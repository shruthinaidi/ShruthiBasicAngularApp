import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-disliked-profile',
  templateUrl: './disliked-profile.component.html',
  styleUrls: ['./disliked-profile.component.scss']
})
export class DislikedProfileComponent implements OnInit {
  empData: any = [];
  constructor(private employeeService:EmployeeService) {
    this.empData = this.employeeService.empList;
  }

  

  ngOnInit(): void {
  }

}
