import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-demo',
  templateUrl: './parent-demo.component.html',
  styleUrls: ['./parent-demo.component.css']
})
export class ParentDemoComponent  {
  sendData = 'I am from Parent';
  recievedData;
}
