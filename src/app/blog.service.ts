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
    return this.http.get<Post[]>('https://techwire.lk/wp-json/wp/v2/posts?_embed&per_page=7');
  }
  getpost_Techguru(){
    return this.http.get<Post[]>('http://techguru.lk/wp-json/wp/v2/posts?_embed&per_page=7');
  }
  getpost_Readhub(){
    return this.http.get<Post[]>('https://readhub.lk/wp-json/wp/v2/posts?_embed&per_page=7');
  }
  getpost_power(){
    return this.http.get<Post[]>('https://www.power.lk/wp-json/wp/v2/posts?_embed&per_page=7');
  }
  
}
