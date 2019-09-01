import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
 

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) {
    
   }
  getpost_Techwire(){
    return this.http.get<Post[]>('https://techwire.lk/wp-json/wp/v2/posts?_embed');
  }
  getpost_Techguru(){
    return this.http.get<Post[]>('http://techguru.lk/wp-json/wp/v2/posts?_embed');
  }
  getpost_Readhub(){
    return this.http.get<Post[]>('https://readhub.lk/wp-json/wp/v2/posts?_embed');
  }
  
  
}
