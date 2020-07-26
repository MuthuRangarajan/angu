import { Component,  ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import {DemoCmpComponent} from '../demo-cmp/demo-cmp.component';

@Component({
  selector: 'app-dynamic-add',
  templateUrl: './dynamic-add.component.html',
  styleUrls: ['./dynamic-add.component.css']
})
export class DynamicAddComponent {
  @ViewChild('plcHld',{read:ViewContainerRef,static:false}) refChildElm;

  constructor(private refCmpFacRes:ComponentFactoryResolver) { }

  btnClick = () => {
    const sDynAdd = this.refCmpFacRes.resolveComponentFactory(DemoCmpComponent);
    this.refChildElm.createComponent(sDynAdd);
  }

}
