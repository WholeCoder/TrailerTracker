"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var NavBarComponent = (function () {
    function NavBarComponent(fb, http, router) {
        this.http = http;
        this.router = router;
        this.loginForm = fb.group({
            username: [''],
            password: ['']
        });
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.loginUser = function (event) {
        var _this = this;
        // alert('click happened.');
        this.http.post('/api/user', this.loginForm.value)
            .map(function (res) { return res.json(); })
            .subscribe(function (x) {
            if (x == null || x.err != null) {
                console.log('x == ' + x);
                alert('can not log in! - ' + JSON.stringify(x));
            }
            else {
                console.log('x == ' + JSON.stringify(x));
                _this.router.navigateByUrl('/trailertable');
            }
        });
    }; // end of loginUser(event)
    NavBarComponent.prototype.newUser = function (event) {
        alert('create new user!');
        this.router.navigateByUrl('/signupuser');
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: 'app-nav-bar',
        templateUrl: './nav-bar.component.html',
        styleUrls: ['./nav-bar.component.css']
    }),
    __param(0, core_1.Inject(forms_1.FormBuilder))
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
