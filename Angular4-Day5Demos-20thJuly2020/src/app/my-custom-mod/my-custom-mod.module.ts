import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCustomCmpComponent } from './my-custom-cmp/my-custom-cmp.component';

@NgModule({
  declarations: [
    MyCustomCmpComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MyCustomCmpComponent
  ]
})
export class MyCustomModModule { }
