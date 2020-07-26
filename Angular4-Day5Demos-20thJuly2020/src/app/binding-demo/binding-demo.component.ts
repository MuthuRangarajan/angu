import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})
export class BindingDemoComponent  {
   sTraining = 'Angular 4';
   sLearn = 'Feeling Sleepy After Post Lunch';
   sColor = 'red';
   sTrngStatus = 'Learning Angular From TT-CTE';

   alertDemo = () => {
    console.log('Boss let us make the day lighter with only few topics');
   }
}
