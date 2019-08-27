import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
 

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) {
    
   }
  getpost(){
    return this.http.get<Post[]>('https://techwire.lk/wp-json/wp/v2/posts');
  }
     
  
}
