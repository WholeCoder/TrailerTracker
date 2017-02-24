import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap';
import { MyNewCoonentComponent } from './my-new-coonent/my-new-coonent.component';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TrailerTableComponent } from './trailer-table/trailer-table.component';
import { DefaultComponentComponent } from './default-component/default-component.component';
//git push origin [name_of_your_new_branch]



@NgModule({
  declarations: [
    AppComponent,
    MyNewCoonentComponent,
    NavBarComponent,
    TrailerTableComponent,
    DefaultComponentComponent
  ],
  imports: [
    TabsModule,
    AlertModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {
            path: 'trailertable',
            component: TrailerTableComponent,
            outlet: 'main-content'
        },
        {
            path: '',
            component: NavBarComponent,
            outlet: 'nav-bar'
        },
        {
            path: '',
            component: MyNewCoonentComponent,
            outlet: 'main-content'
        },
        {path: '**', component: DefaultComponentComponent,
        outlet: 'main-content'}
        ]


    )
    // MyNewCoonentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
