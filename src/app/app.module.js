"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_table_component_1 = require("../../node_modules/ng2-table/components/table/ng-table.component");
var ng_table_sorting_directive_1 = require("../../node_modules/ng2-table/components/table/ng-table-sorting.directive");
var ng_table_filtering_directive_1 = require("../../node_modules/ng2-table/components/table/ng-table-filtering.directive");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var store_1 = require("./store");
var shared_module_1 = require("./shared/shared.module");
var weather_service_1 = require("./weather/weather.service");
var table_component_1 = require("./table/table.component");
var home_component_1 = require("./home/home.component");
var my_new_coonent_component_1 = require("./my-new-coonent/my-new-coonent.component");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
var trailer_list_item_component_1 = require("./trailer-list-item/trailer-list-item.component");
var trailer_service_1 = require("./trailer.service");
var default_component_1 = require("./default/default.component");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var trailer_form_component_1 = require("./trailer-form/trailer-form.component");
var forms_2 = require("@angular/forms");
var sign_up_component_1 = require("./sign-up/sign-up.component");
var nav_bar_user_logged_in_component_1 = require("./nav-bar-user-logged-in/nav-bar-user-logged-in.component");
var sign_up_form_component_1 = require("./sign-up-form/sign-up-form.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent, children: [
            { path: '', component: nav_bar_component_1.NavBarComponent, outlet: 'nav-bar-content' },
            { path: '', component: my_new_coonent_component_1.MyNewCoonentComponent, outlet: 'main-content' }
        ] },
    { path: 'signup', component: home_component_1.HomeComponent, children: [
            { path: '', component: nav_bar_component_1.NavBarComponent, outlet: 'nav-bar-content' },
            { path: '', component: sign_up_component_1.SignUpComponent, outlet: 'main-content' }
        ] },
    { path: 'trailertable', component: home_component_1.HomeComponent, children: [
            { path: '', component: nav_bar_component_1.NavBarComponent, outlet: 'nav-bar-content' },
            { path: '', component: table_component_1.TableDemoComponent, outlet: 'main-content' }
        ] },
    { path: 'newtrailer', component: home_component_1.HomeComponent, children: [
            { path: '', component: nav_bar_component_1.NavBarComponent, outlet: 'nav-bar-content' },
            { path: '', component: trailer_form_component_1.TrailerFormComponent, outlet: 'main-content' }
        ] },
    { path: 'signupuser', component: home_component_1.HomeComponent, children: [
            { path: '', component: nav_bar_component_1.NavBarComponent, outlet: 'nav-bar-content' },
            { path: '', component: sign_up_form_component_1.SignUpFormComponent, outlet: 'main-content' }
        ] },
    { path: '**', component: default_component_1.DefaultComponent, outlet: 'main-content' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            table_component_1.TableDemoComponent,
            home_component_1.HomeComponent,
            my_new_coonent_component_1.MyNewCoonentComponent,
            nav_bar_component_1.NavBarComponent,
            trailer_list_item_component_1.TrailerListItemComponent,
            default_component_1.DefaultComponent,
            ng_table_filtering_directive_1.NgTableFilteringDirective,
            ng_table_component_1.NgTableComponent,
            ng_table_sorting_directive_1.NgTableSortingDirective,
            trailer_form_component_1.TrailerFormComponent,
            sign_up_component_1.SignUpComponent,
            nav_bar_user_logged_in_component_1.NavBarUserLoggedInComponent,
            sign_up_form_component_1.SignUpFormComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            shared_module_1.SharedModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            store_1.store,
            store_1.effects,
            // routing,
            router_1.RouterModule.forRoot(appRoutes),
            store_1.instrumentation,
            ng2_bootstrap_1.PaginationModule.forRoot(),
            forms_2.ReactiveFormsModule
        ],
        providers: [
            trailer_service_1.TrailerService,
            weather_service_1.WeatherService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
