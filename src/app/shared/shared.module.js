"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var modal_component_1 = require("./modal/modal.component");
var common_1 = require("@angular/common");
var top_navigation_component_1 = require("./top-navigation/top-navigation.component");
var router_1 = require("@angular/router");
var sub_navigation_component_1 = require("./sub-navigation/sub-navigation.component");
var notes_component_1 = require("./notes/notes.component");
var button_component_1 = require("./button/button.component");
var input_component_1 = require("./input/input.component");
var forms_1 = require("@angular/forms");
var card_component_1 = require("./card/card.component");
var loader_component_1 = require("./loader/loader.component");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        declarations: [
            modal_component_1.ModalComponent,
            top_navigation_component_1.TopNavigationComponent,
            sub_navigation_component_1.SubNavigationComponent,
            modal_component_1.ModalDirectivesDirective,
            card_component_1.CardComponent,
            button_component_1.ButtonComponent,
            loader_component_1.LoaderComponent,
            input_component_1.InputComponent,
            notes_component_1.NotesComponent
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        exports: [
            modal_component_1.ModalComponent,
            modal_component_1.ModalDirectivesDirective,
            top_navigation_component_1.TopNavigationComponent,
            loader_component_1.LoaderComponent,
            card_component_1.CardComponent,
            button_component_1.ButtonComponent,
            input_component_1.InputComponent,
            sub_navigation_component_1.SubNavigationComponent,
            notes_component_1.NotesComponent
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
