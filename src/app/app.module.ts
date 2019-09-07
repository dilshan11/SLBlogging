import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './blog.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MainpostComponent } from './mainpost/mainpost.component';
import { SliderComponent } from './slider/slider.component';
 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpostComponent,
    SliderComponent,
  
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
