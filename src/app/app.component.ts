import { Component } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // aas;
  // title = 'Blog';
  // post_Techwire$;
  // post_Techguru$;
  // post_Readhub$;
  // a=[1,2];
  // constructor(private bloservice:BlogService){
  //      this.bloservice.getpost_Techwire()
  //      .subscribe(data=>{
  //         this.post_Techwire$=data;
  //          console.log(this.post_Techwire$[0]._embedded['wp:featuredmedia']['0'].source_url);
           
        
  //      });
  //      this.bloservice.getpost_Techguru()
  //      .subscribe(data=>{
  //        this.post_Techguru$=data;
  //      });
  //      this.bloservice.getpost_Readhub()
  //      .subscribe(data=>{
  //        this.post_Readhub$=data;
  //        this.aas=this.post_Readhub$[0]._embedded['wp:featuredmedia']['0'].source_url;
  //        console.log(this.aas);
  //      });

  // }
}
