import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-mainpost',
  templateUrl: './mainpost.component.html',
  styleUrls: ['./mainpost.component.css']
})
export class MainpostComponent implements OnInit {

  fslide1;
  sslide1;
  tslide1;
  foslide1;
   
  fslide2;
  sslide2;
  tslide2;
  foslide2;
  constructor(private blogservice:BlogService) {
    
  }

  ngOnInit() {
    this.blogservice.getpost_Techwire().
    subscribe(data=>{
      this.fslide1=data;
      this.fslide2=this.fslide1.slice(1,7);
      console.log(this.fslide2);
     // console.log(this.fslide1[0].excerpt.rendered.replace( /(<([^>]+)>)/ig, '').substr(0,100));
    });
    this.blogservice.getpost_Readhub().
    subscribe(data=>{
      this.sslide1=data;
      this.sslide2=this.sslide1.slice(1,7);
       
    });
    this.blogservice.getpost_Techguru().
    subscribe(data=>{
      this.tslide1=data;
      this.tslide2=this.tslide1.slice(1,7);
    });
    this.blogservice.getpost_power().
    subscribe(data=>{
      this.foslide1=data;
      this.foslide2=this.foslide1.slice(1,7);
    });
  }
  getpoorhtml(str){
    return str.replace( /(<([^>]+)>)/ig, '').substr (0,200);
  }

}
