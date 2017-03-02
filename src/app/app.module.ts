import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap';
import { MyNewCoonentComponent } from './my-new-coonent/my-new-coonent.component';
import { RouterModule, Routes } from '@angular/router';
import { PathLocationStrategy, LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DefaultComponentComponent } from './default-component/default-component.component';
import { HomeComponent } from './home/home.component';
import { TrailerService } from './trailer.service';
// import { TrailerListItemComponent } from './trailer-list-item/trailer-list-item.component'
import { TableDemoComponent } from './table/table-demo';

import {TableData} from './table/table-data';
//git push origin [name_of_your_new_branch]

const appRoutes:Routes =       [
        {path:'', redirectTo: 'home', pathMatch: 'full'},

        {path:'home', component:HomeComponent, children: [
          {path: '', component: NavBarComponent, outlet: 'nav-bar-content'},
          {path: '', component: MyNewCoonentComponent, outlet: 'main-content'}
        ]},

        {path:'trailertable', component:HomeComponent, children: [
          {path: '', component: NavBarComponent, outlet: 'nav-bar-content'},
          {path: '', component: TableDemoComponent, outlet: 'main-content'}
        ]},

        {path: '**', component: DefaultComponentComponent, outlet: 'main-content'}
      ];


@NgModule({
  declarations: [
    AppComponent,
    MyNewCoonentComponent,
    NavBarComponent,
    DefaultComponentComponent,
    HomeComponent,
    // TrailerListItemComponent,
    // TableData,
    TableDemoComponent
  ],
  imports: [
    TabsModule,
    AlertModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    // MyNewCoonentComponent
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, TrailerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
