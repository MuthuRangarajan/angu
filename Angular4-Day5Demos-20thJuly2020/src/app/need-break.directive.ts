import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appNeedBreak]'
})
export class NeedBreakDirective {

  constructor(private refElementRef:ElementRef) {
    this.refElementRef.nativeElement.innerText = "Demo for Custom Directives";
    this.refElementRef.nativeElement.style.color = "yellow";
    this.refElementRef.nativeElement.style.fontSize = "375%";
   }

}
