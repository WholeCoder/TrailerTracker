import {BrowserModule} from "@angular/platform-browser";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {NgTableComponent} from "../../node_modules/ng2-table/components/table/ng-table.component";
import {NgTableSortingDirective} from "../../node_modules/ng2-table/components/table/ng-table-sorting.directive";
import {NgTableFilteringDirective} from "../../node_modules/ng2-table/components/table/ng-table-filtering.directive";

import {AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";
import {TableDemoComponent} from "./table/table.component";
import {HomeComponent} from "./home/home.component";
import {MyNewCoonentComponent} from "./my-new-coonent/my-new-coonent.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {TrailerListItemComponent} from "./trailer-list-item/trailer-list-item.component";
import {TrailerService} from "./trailer.service";
import {DefaultComponent} from "./default/default.component";

import {DatePickerModule} from "ng2-datepicker";
import {PaginationModule} from "ng2-bootstrap";
import {TrailerFormComponent} from "./trailer-form/trailer-form.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {NavBarUserLoggedInComponent} from "./nav-bar-user-logged-in/nav-bar-user-logged-in.component";
import {StatusDropDownComponent} from "./status-drop-down/status-drop-down.component";
import {StatusService} from "./status.service";
import {PassTrailerDataService} from "./pass-trailer-data.service";
import {Ng2AutoCompleteModule} from "ng2-auto-complete";
import {CustomerService} from "./customer.service";
import {AccountService} from "./account.service";
import {VehicleTypeService} from "./vehicle-type.service";
import {LocationService} from "./location.service";
import {UserTableComponent} from "./user-table/user-table.component";
import {ResetUserPasswordComponent} from "./reset-user-password/reset-user-password.component";
import {TransferUserInfoForPasswordResetService} from "./transfer-user-info-for-password-reset.service";
import { SignUpGarageComponent } from './sign-up-garage/sign-up-garage.component';
import { AddMilestoneIndicatorsComponent } from './add-milestone-indicators/add-milestone-indicators.component';

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

        {path: 'signupgarage', component: HomeComponent, children: [
          {path: '', component: NavBarComponent, outlet: 'nav-bar-content'},
          {path: '', component: SignUpGarageComponent, outlet: 'main-content'}
        ]},

        {path: 'add_milestone_indicators', component: HomeComponent, children: [
          {path: '', component: NavBarComponent, outlet: 'nav-bar-content'},
          {path: '', component: AddMilestoneIndicatorsComponent, outlet: 'main-content'}
        ]},

        {path: 'trailertable', component: HomeComponent, children: [
          {path: '', component: NavBarUserLoggedInComponent, outlet: 'nav-bar-content'},
          {path: '', component: TableDemoComponent, outlet: 'main-content'},
          {path: '', component: UserTableComponent, outlet: 'below-main-content'}
        ]},

        {path: 'resetuserpassword', component: HomeComponent, children: [
          {path: '', component: NavBarUserLoggedInComponent, outlet: 'nav-bar-content'},
          {path: '', component: ResetUserPasswordComponent, outlet: 'main-content'}
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
    NavBarUserLoggedInComponent,
    StatusDropDownComponent,
    UserTableComponent,
    ResetUserPasswordComponent,
    SignUpGarageComponent,
    AddMilestoneIndicatorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    PaginationModule.forRoot(),
    ReactiveFormsModule,
    DatePickerModule,
    Ng2AutoCompleteModule
  ],
  providers: [
    TrailerService,
    StatusService,
    PassTrailerDataService,
    CustomerService,
    AccountService,
    VehicleTypeService,
    LocationService,
    TransferUserInfoForPasswordResetService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
