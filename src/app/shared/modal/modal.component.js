"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ModalComponent = (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () { };
    return ModalComponent;
}());
ModalComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: 'app-ui-modal',
        templateUrl: './modal.component.html',
        styleUrls: ['./modal.component.css']
    })
], ModalComponent);
exports.ModalComponent = ModalComponent;
var ModalDirectivesDirective = (function () {
    function ModalDirectivesDirective() {
    }
    return ModalDirectivesDirective;
}());
ModalDirectivesDirective = __decorate([
    core_1.Directive({
        selector: 'app-modal-header, app-modal-body'
    })
], ModalDirectivesDirective);
exports.ModalDirectivesDirective = ModalDirectivesDirective;
