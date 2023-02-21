import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList:any = [
    {productName:"kurthi", isActive:true, createdAt:new Date(), productMRP:1100, productDiscount:45, productRating:3.5,  productImg:"https://m.media-amazon.com/images/I/51I9hJbgCCS._UY550_.jpg"},
    {productName:"palazzo", isActive:false, createdAt:new Date(), productMRP:1200, productDiscount:40,  productRating:4.0, productImg:"https://m.media-amazon.com/images/I/81GROn-lJ1L._UL1500_.jpg"},
    {productName:"palazzo", isActive:true, createdAt:new Date(), productMRP:1300, productDiscount:35, productRating:4.5,  productImg:"https://rukminim1.flixcart.com/image/832/832/l1fc0i80/ethnic-set/1/9/i/m-kurti-palazzo-pooravi-fashion-original-imagczzwktdnmraw.jpeg?q=70"},
    {productName:"churidhar",  isActive:false, createdAt:new Date(), productMRP:1400, productDiscount:30, productRating:3.0, productImg:"https://m.media-amazon.com/images/I/71bk2xxkavL._UL1500_.jpg"},
    {productName:"Anarkali",  isActive:true, productMRP:1500, productDiscount:10, productRating:5.0,  productImg:"https://5.imimg.com/data5/SELLER/Default/2022/8/KF/GQ/VA/74166486/party-wear-anarkali-gown-500x500.jpeg"},
  ]
  empData: any = [];
  empDetaile:any;
  constructor(private employeeService:EmployeeService) { 
    console.log(this.employeeService);
     this.empData = this.employeeService.empList;
      this.empData = this.employeeService.getAllEmpData();
      this.empDetaile = this.employeeService.getEmpDataBasedOnIndex(1);

    setTimeout(()=>{
      this.productList.push({productName:"onlineshopping",isActive:false, createdAt:new Date(), productMRP:1500, productDiscount:10, productRating:5.0, productImg:"https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470__340.jpg"})
    },5000)
  }

  ngOnInit(): void {
    console.log("ngOnInit is called");
   this.loadEmployeesData();
  }
  loadEmployeesData(){
    this.empData=this.employeeService.getAllEmpData();
  }
  trackProducts(index:number, item:any):any{
    // console.log(index)
     //console.log(item)
    return index
  }
}
