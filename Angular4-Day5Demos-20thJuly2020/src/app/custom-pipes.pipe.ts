import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {

  transform(dNumber:number):number{
     console.log(' Inside CustomPipes ');
     return Math.sqrt(dNumber);
  }

}
