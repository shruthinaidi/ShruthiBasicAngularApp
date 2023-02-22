import { Component, OnInit } from '@angular/core';
import { from, Observable, of, range } from 'rxjs';
@Component({
  selector: 'app-rxjs-examples',
  templateUrl: './rxjs-examples.component.html',
  styleUrls: ['./rxjs-examples.component.scss']
})
export class RxjsExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //Observable examples 

    // const myTestObs = new Observable((observer:any)=>{
    //      observer.next(10)
    //      observer.next(20)
    //      observer.next(50)
    //    });

    //  no data without subscribe
    //     console.log(myTestObs)
    // //  myTestObs.subscribe(()=>{},()=>{},()=>{})
    //  myTestObs.subscribe((result:any)=>{
    //     console.log(result)
    //  });

    //from Observable
      // const arr = [10,20,30,40,50,60];
      // const arrAsObs = from(arr);
      //  arrAsObs.subscribe((result:any)=>{
     //   console.log(result)
      // })

  //of Observable
          const arr = [10,20,30,40,50,60];
       // const arrAsObs = of(...arr);
       // arrAsObs.subscribe((result:any)=>{
      // console.log(result)
        //  })

  //range Observable
     const arrAsObs = range(1,5); //doubt
    arrAsObs.subscribe((result:any)=>{
      // console.log(result+1)
      console.log(result)
    })
  }
  }


