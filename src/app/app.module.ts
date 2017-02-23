import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
<<<<<<< HEAD
//test
=======

>>>>>>> 6b97323363ba713a5fc6e459d24e3f0be5a72cd9
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
