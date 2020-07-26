import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.css']
})
export class ChildDemoComponent {
  @Input() datap2c;
  c2p = "I am from Child Component";
  @Output() objEventEmitter  = new EventEmitter();
  broadCastInfo = () => {
    this.objEventEmitter.emit(this.c2p);
  }
}
