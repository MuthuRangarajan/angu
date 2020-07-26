import { Component} from '@angular/core';

@Component({
  selector: 'app-dir-demo-cmp',
  templateUrl: './dir-demo-cmp.component.html',
  styleUrls: ['./dir-demo-cmp.component.css']
})
export class DirDemoCmpComponent{
  sTrngFdk = 'Learnable Training';

  acModules = ['MongoDB','Express JS','Angular','React JS','Node JS'];
  sCourseDesc = 'Mongo DB';
  
  iterateArray = () =>{
    for(let iIndex=0;iIndex<this.acModules.length;iIndex++){

    }
  }
}
