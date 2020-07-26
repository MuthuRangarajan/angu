import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MyCustomModModule} from './my-custom-mod/my-custom-mod.module';
import { AppComponent } from './app.component';
import { BindingDemoComponent } from './binding-demo/binding-demo.component';
import { ViewCntDmoComponent } from './view-cnt-dmo/view-cnt-dmo.component';
import { ParentDemoComponent } from './parent-demo/parent-demo.component';
import { ChildDemoComponent } from './child-demo/child-demo.component';
import { DynamicAddComponent } from './dynamic-add/dynamic-add.component';
import { DemoCmpComponent } from './demo-cmp/demo-cmp.component';
import { DirDemoCmpComponent } from './dir-demo-cmp/dir-demo-cmp.component';
import { CustomDirDirective } from './custom-dir.directive';
import { LearningAngDirective } from './learning-ang-directive';
import { NeedBreakDirective } from './need-break.directive';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CustomPipesPipe } from './custom-pipes.pipe';
import { HttpServiceDmoComponent } from './http-service-dmo/http-service-dmo.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
@NgModule({
  declarations: [
    AppComponent,
    BindingDemoComponent,
    ViewCntDmoComponent,
    ParentDemoComponent,
    ChildDemoComponent,
    DynamicAddComponent,
    DemoCmpComponent,
    DirDemoCmpComponent,
    CustomDirDirective,
    LearningAngDirective,
    NeedBreakDirective,
    PipesDemoComponent,
    CustomPipesPipe,
    HttpServiceDmoComponent,
    FormValidationComponent,
    RoutingDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path:'cmpInteraction',
          component:ParentDemoComponent
        },
        {
          path:'dynAdd',
          component:DynamicAddComponent
        },
        {
          path:'dirDemo',
          component:DirDemoCmpComponent
        }
      ]
    ),
    MyCustomModModule
  ],
  entryComponents:[
    DemoCmpComponent
  ],
  providers: [],
  bootstrap: [
    RoutingDemoComponent
  ]

})
export class AppModule { }

