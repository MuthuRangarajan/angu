import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import './view-cnt-dmo.component.css';
@Component({
  selector: 'app-view-cnt-dmo',
  templateUrl: './view-cnt-dmo.component.html',
  styleUrls: ['./view-cnt-dmo.component.css']
})
export class ViewCntDmoComponent implements OnInit {
  @ViewChild('myPara',{static:true}) refElements:ElementRef;

  ngOnInit(){
    console.log(this.refElements);
    console.log(this.refElements.nativeElement.textContent);
  }
}
