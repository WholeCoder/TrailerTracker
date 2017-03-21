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
var TrailerFormComponent = (function () {
    function TrailerFormComponent(fb, http) {
        this.http = http;
        this.trailerForm = fb.group({
            unitnumber: [""],
            customer: [""],
            account: [""],
            vehicletype: [""],
            location: [""],
            datersnotified: [""],
            estimatedtimeofcompletion: [""],
            status1: [""],
            status2: [""],
            status3: [""],
            note: [""],
            dateauthorized: [""],
            authorizedinitials: [""]
        });
    }
    TrailerFormComponent.prototype.ngOnInit = function () {
    };
    TrailerFormComponent.prototype.saveTrailer = function (event) {
        this.http.post('/api/trailers', this.trailerForm.value)
            .map(function (res) { return res.json(); })
            .subscribe(function (x) {
            alert('saved trailer! - ' + JSON.stringify(x));
        });
    };
    return TrailerFormComponent;
}());
TrailerFormComponent = __decorate([
    core_1.Component({
        selector: 'app-trailer-form',
        templateUrl: './trailer-form.component.html',
        styleUrls: ['./trailer-form.component.css']
    }),
    __param(0, core_1.Inject(forms_1.FormBuilder))
], TrailerFormComponent);
exports.TrailerFormComponent = TrailerFormComponent;
