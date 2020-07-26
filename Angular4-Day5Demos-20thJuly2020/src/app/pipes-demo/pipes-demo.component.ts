import { Component } from '@angular/core';
import { CustomServiceService } from '../custom-service.service';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent  {
  sBusinessUnit :string = 'center for technology excellence';
  sModuleName: string = 'Angular 4 Training';
  dDate : Date = new Date();
  dSalary = 12000;  
  dNumber:number = 12;

  constructor(private refService:CustomServiceService){
    
  }
  invokeMethod(){
    this.refService.dispDemo();
  }
}
