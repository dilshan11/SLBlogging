import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BlogService } from './blog.service';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  fslide;
  sslide;
  tslide;
  foslide;
private postsource=new Subject<any>();
$alldata=this.postsource.asObservable();
  constructor(private blogservice:BlogService) {

    this.blogservice.getpost_Techwire().
    subscribe(data=>{
      this.fslide=data;
    });
    this.blogservice.getpost_power().
    subscribe(data=>{
      this.sslide=data;
    });
    this.blogservice.getpost_Readhub().
    subscribe(data=>{
      this.tslide=data;
    });
    this.blogservice.getpost_Techguru().
    subscribe(data=>{
      this.foslide=data;
    });
   }
}
