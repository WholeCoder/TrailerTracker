"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
<<<<<<< HEAD
var core_1 = require("@angular/core");
var SignUpComponent = (function () {
    function SignUpComponent() {
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
=======
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignUpComponent = (function () {
    function SignUpComponent(fb, http) {
        this.http = http;
        this.signUpForm = fb.group({
            email: [''],
            password: [''],
            password_confirmation: ['']
        });
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.saveNewUser = function (event) {
        alert('saved!');
    };
>>>>>>> master
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        selector: 'app-sign-up',
        templateUrl: './sign-up.component.html',
        styleUrls: ['./sign-up.component.css']
<<<<<<< HEAD
    })
=======
    }),
    __param(0, core_1.Inject(forms_1.FormBuilder))
>>>>>>> master
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
