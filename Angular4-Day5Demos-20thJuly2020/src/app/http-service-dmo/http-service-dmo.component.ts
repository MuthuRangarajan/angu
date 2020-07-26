import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-service-dmo',
  templateUrl: './http-service-dmo.component.html',
  styleUrls: ['./http-service-dmo.component.css']
})
export class HttpServiceDmoComponent implements OnInit {
  name:String;
  city:String;
  constructor(private refHttpClient:HttpClient) { }

  ngOnInit() {
    this.refHttpClient.get('http://jsonplaceholder.typicode.com/users')
    .subscribe((data)=>{
      console.log(data);
      this.name = data[2].username;
      this.city = data[2].address.city;
    });
  }

}
