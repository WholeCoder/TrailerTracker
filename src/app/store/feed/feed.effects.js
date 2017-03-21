"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var effects_1 = require("@ngrx/effects");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/switchMap");
require("rxjs/add/observable/of");
var feed_actions_1 = require("./feed.actions");
var FeedEffects = (function () {
    function FeedEffects(actions$, http) {
        var _this = this;
        this.actions$ = actions$;
        this.http = http;
        this.addFeed$ = this.actions$
            .ofType(feed_actions_1.FEED_ADD)
            .switchMap(function (action) {
            return _this.http.post('/api/feed', action.payload)
                .map(function (response) { return response.json(); })
                .catch(function () { return Observable_1.Observable.of(({ type: feed_actions_1.FEED_ADD_FAIL })); })
                .map(function (response) { return ({ type: feed_actions_1.FEED_ADD_SUCCESS, payload: response }); });
        });
        this.addFeedComment$ = this.actions$
            .ofType(feed_actions_1.FEED_ADD_COMMENT)
            .switchMap(function (action) {
            return _this.http.post('/api/feed/' + action.payload.id + '/comment', action.payload.comment)
                .map(function (response) { return response.json(); })
                .catch(function () { return Observable_1.Observable.of(({ type: feed_actions_1.FEED_ADD_COMMENT_FAIL })); })
                .map(function (response) { return ({ type: feed_actions_1.FEED_ADD_COMMENT_SUCCESS, payload: response }); });
        });
        this.removeFeed$ = this.actions$
            .ofType(feed_actions_1.FEED_REMOVE)
            .switchMap(function (action) {
            return _this.http.delete('/api/feed/' + action.payload)
                .map(function (response) { return response.json(); })
                .catch(function () { return Observable_1.Observable.of(({ type: feed_actions_1.FEED_REMOVE_FAIL })); })
                .map(function (response) { return ({ type: feed_actions_1.FEED_REMOVE_SUCCESS, payload: response }); });
        });
    }
    return FeedEffects;
}());
__decorate([
    effects_1.Effect()
], FeedEffects.prototype, "addFeed$", void 0);
__decorate([
    effects_1.Effect()
], FeedEffects.prototype, "addFeedComment$", void 0);
__decorate([
    effects_1.Effect()
], FeedEffects.prototype, "removeFeed$", void 0);
FeedEffects = __decorate([
    core_1.Injectable()
], FeedEffects);
exports.FeedEffects = FeedEffects;
