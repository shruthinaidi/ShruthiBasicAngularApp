import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostliked',
  templateUrl: './mostliked.component.html',
  styleUrls: ['./mostliked.component.scss']
})
export class MostlikedComponent implements OnInit {
 
  userName:string = "shruthi";
  userMobileNo:number = 9502580621;
  isUserActive:boolean =  true;
  countryList:string[] = ["India","Dubai","America"];
  productImg:string = "https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg";
  constructor() { }

  ngOnInit(): void {
  }
  updateUserName(message:string):void{
    console.log("Onclick event is executed");
    this.userName = `${message} shruthi`;
  }
   

}