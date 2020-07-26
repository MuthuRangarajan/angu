import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {
  constructor(private refElmRef:ElementRef,private refRenderer:Renderer2) { }

  @HostListener('mouseover') 
  boringTrng(){
    this.refRenderer.setAttribute(this.refElmRef.nativeElement,'value','Badly we need a logical break')
  }

  @HostListener('mouseleave')
  noItsNotaBoringTrng(){
    this.refRenderer.removeAttribute(this.refElmRef.nativeElement,'value');
  }
}
