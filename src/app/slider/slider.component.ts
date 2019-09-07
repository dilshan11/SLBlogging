import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  fslide;
  sslide;
  tslide;
  foslide;
  bigslide=[];
  constructor(private blogservice:BlogService) {
    
  }

  ngOnInit() {
    this.blogservice.getpost_Techwire().
    subscribe(data=>{
      this.fslide=data;
      this.bigslide.push(data[0]);
      this.bigslide.push(data[1]);
      this.bigslide.push(data[2]);
    });
    this.blogservice.getpost_Readhub().
    subscribe(data=>{
      this.sslide=data;
      this.bigslide.push(data[0]);
      this.bigslide.push(data[1]);
      this.bigslide.push(data[2]);
    });
    this.blogservice.getpost_Techguru().
    subscribe(data=>{
      this.tslide=data;
      this.bigslide.push(data[0]);
      this.bigslide.push(data[1]);
      this.bigslide.push(data[2]);
      
    });
    this.blogservice.getpost_power().
    subscribe(data=>{
      this.foslide=data;
      this.bigslide.push(data[0]);
      this.bigslide.push(data[1]);
      this.bigslide.push(data[2]);
      console.log(this.bigslide);
    });
  }

}
