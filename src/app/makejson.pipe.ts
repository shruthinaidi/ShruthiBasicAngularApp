import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makejson',
   pure:true,
})
export class MakejsonPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
     // if(value.length > 3){
    //   const slicedStr = value.slice(0,3);

    //   return `${slicedStr}...`;
    // }else{
    //   return value;
    // }
     const convertIntoJson = JSON.stringify(value);
   return convertIntoJson;
   
      
       }
   
       


   
  }

