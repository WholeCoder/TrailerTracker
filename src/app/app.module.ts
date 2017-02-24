import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap';
import { MyNewCoonentComponent } from './my-new-coonent/my-new-coonent.component';

import { AppComponent } from './app.component';
//git push origin [name_of_your_new_branch]
@NgModule({
  declarations: [
    AppComponent,
    MyNewCoonentComponent
  ],
  imports: [
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    // MyNewCoonentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
