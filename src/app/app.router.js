"use strict";
var router_1 = require("@angular/router");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'weather' },
    { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'dashboard' },
    { loadChildren: 'app/profile/profile.module#ProfileModule', path: 'profile' },
    { loadChildren: 'app/weather/weather.module#WeatherModule', path: 'weather' }
];
exports.routing = router_1.RouterModule.forRoot(routes, {
    useHash: true
});
