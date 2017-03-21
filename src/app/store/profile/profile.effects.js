"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ProfileEffects = (function () {
    // @Effect()
    // userGet$ = this.actions$
    //   .ofType(USER_GET)
    //   .switchMap((action: Action) => {
    //
    //     return this.http.get('/api/user', action.payload)
    //       .map((response: Response) => response.json())
    //       .catch(() => Observable.of(({ type: USER_GET_FAIL })))
    //       .map((response) => ({type: USER_GET_SUCCESS, payload: response}));
    //
    //   });
    //
    function ProfileEffects(actions$, http) {
        this.actions$ = actions$;
        this.http = http;
    }
    return ProfileEffects;
}());
ProfileEffects = __decorate([
    core_1.Injectable()
], ProfileEffects);
exports.ProfileEffects = ProfileEffects;
