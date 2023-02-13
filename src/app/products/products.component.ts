import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList:any = [
    {productName:"kurthi", productMRP:1100, productDiscount:45, productRating:3.5,  productImg:"https://m.media-amazon.com/images/I/51I9hJbgCCS._UY550_.jpg"},
    {productName:"palazzo", productMRP:1200, productDiscount:40,  productRating:4.0, productImg:"https://m.media-amazon.com/images/I/81GROn-lJ1L._UL1500_.jpg"},
    {productName:"palazzo",productMRP:1300, productDiscount:35, productRating:4.5,  productImg:"https://rukminim1.flixcart.com/image/832/832/l1fc0i80/ethnic-set/1/9/i/m-kurti-palazzo-pooravi-fashion-original-imagczzwktdnmraw.jpeg?q=70"},
    {productName:"churidhar", productMRP:1400, productDiscount:30, productRating:3.0, productImg:"https://m.media-amazon.com/images/I/71bk2xxkavL._UL1500_.jpg"},
    {productName:"Anarkali", productMRP:1500, productDiscount:10, productRating:5.0,  productImg:"https://5.imimg.com/data5/SELLER/Default/2022/8/KF/GQ/VA/74166486/party-wear-anarkali-gown-500x500.jpeg"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
