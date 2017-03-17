import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgTableComponent} from '../../node_modules/ng2-table/components/table/ng-table.component';
import {NgTableSortingDirective} from '../../node_modules/ng2-table/components/table/ng-table-sorting.directive';
import {NgTableFilteringDirective} from '../../node_modules/ng2-table/components/table/ng-table-filtering.directive';

import {TableData} from './table/table-data';

import { AppComponent } from './app.component';
import { routing } from './app.router';
import { RouterModule, Routes } from '@angular/router';
import { effects, store, instrumentation } from './store';
import { SharedModule } from './shared/shared.module';
import { WeatherService } from './weather/weather.service';
import { TableDemoComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { MyNewCoonentComponent } from './my-new-coonent/my-new-coonent.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TrailerListItemComponent } from './trailer-list-item/trailer-list-item.component';
import { TrailerService } from './trailer.service';
import { DefaultComponent } from './default/default.component';

import { PaginationModule } from 'ng2-bootstrap';
import { TrailerFormComponent } from './trailer-form/trailer-form.component';

import { ReactiveFormsModule } from '@angular/forms'

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

        {path:'newtrailer', component:HomeComponent, children: [
          {path: '', component: NavBarComponent, outlet: 'nav-bar-content'},
          {path: '', component: TrailerFormComponent, outlet: 'main-content'}
        ]},

        {path: '**', component: DefaultComponent, outlet: 'main-content'}
      ];


@NgModule({
  declarations: [
    AppComponent,
    TableDemoComponent,
    HomeComponent,
    MyNewCoonentComponent,
    NavBarComponent,
    TrailerListItemComponent,
    DefaultComponent,
    NgTableFilteringDirective,
    NgTableComponent,
    NgTableSortingDirective,
    TrailerFormComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    store,
    effects,
    // routing,
    RouterModule.forRoot(appRoutes),
    instrumentation,
    PaginationModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    TrailerService,
    WeatherService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
