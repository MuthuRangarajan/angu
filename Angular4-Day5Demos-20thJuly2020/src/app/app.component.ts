import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'WebExDemosJuly20';
  constructor(private refTitle:Title){
    this.refTitle.setTitle("Enough For the day");
  }
}
