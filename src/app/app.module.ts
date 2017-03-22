import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {NgTableComponent} from '../../node_modules/ng2-table/components/table/ng-table.component';
import {NgTableSortingDirective} from '../../node_modules/ng2-table/components/table/ng-table-sorting.directive';
import {NgTableFilteringDirective} from '../../node_modules/ng2-table/components/table/ng-table-filtering.directive';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {TableDemoComponent} from './table/table.component';
import {HomeComponent} from './home/home.component';
import {MyNewCoonentComponent} from './my-new-coonent/my-new-coonent.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {TrailerListItemComponent} from './trailer-list-item/trailer-list-item.component';
import {TrailerService} from './trailer.service';
import {DefaultComponent} from './default/default.component';

import {PaginationModule} from 'ng2-bootstrap';
import {TrailerFormComponent} from './trailer-form/trailer-form.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {NavBarUserLoggedInComponent} from './nav-bar-user-logged-in/nav-bar-user-logged-in.component';

const appRoutes: Routes =       [
        {path: '', redirectTo: 'home', pathMatch: 'full'},

        {path: 'home', component: HomeComponent, children: [
          {path: '', component: NavBarComponent, outlet: 'nav-bar-content'},
          {path: '', component: MyNewCoonentComponent, outlet: 'main-content'}
        ]},

        {path: 'signup', component: HomeComponent, children: [
          {path: '', component: NavBarComponent, outlet: 'nav-bar-content'},
          {path: '', component: SignUpComponent, outlet: 'main-content'}
        ]},

        {path: 'trailertable', component: HomeComponent, children: [
          {path: '', component: NavBarUserLoggedInComponent, outlet: 'nav-bar-content'},
          {path: '', component: TableDemoComponent, outlet: 'main-content'}
        ]},

        {path: 'newtrailer', component: HomeComponent, children: [
          {path: '', component: NavBarUserLoggedInComponent, outlet: 'nav-bar-content'},
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
    TrailerFormComponent,
    SignUpComponent,
    NavBarUserLoggedInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    PaginationModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    TrailerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
