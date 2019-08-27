import { Component } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'Blog';
  project;
  constructor(private bloservice:BlogService){
       this.bloservice.getpost()
       .subscribe(data=>{
          this.project=data;
          console.log(data);
        
       })
  }
}
