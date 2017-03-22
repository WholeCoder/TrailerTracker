"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NavBarUserLoggedInComponent = (function () {
    function NavBarUserLoggedInComponent() {
    }
    NavBarUserLoggedInComponent.prototype.ngOnInit = function () {
    };
    return NavBarUserLoggedInComponent;
}());
NavBarUserLoggedInComponent = __decorate([
    core_1.Component({
        selector: 'app-nav-bar-user-logged-in',
        templateUrl: './nav-bar-user-logged-in.component.html',
        styleUrls: ['./nav-bar-user-logged-in.component.css'],
        animations: [
            core_1.trigger('navBarPanel1', [
                core_1.transition('void => *', [
                    core_1.style({ transform: 'translateY(-100%)' }),
                    core_1.animate(150)
                ])
            ])
        ]
    })
], NavBarUserLoggedInComponent);
exports.NavBarUserLoggedInComponent = NavBarUserLoggedInComponent;
