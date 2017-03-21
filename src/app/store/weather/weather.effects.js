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
require("rxjs/add/operator/mergeMap");
require("rxjs/add/observable/of");
require("rxjs/add/observable/concat");
var weather_actions_1 = require("./weather.actions");
var WeatherEffects = (function () {
    function WeatherEffects(actions$, weatherService) {
        var _this = this;
        this.actions$ = actions$;
        this.weatherService = weatherService;
        this.init$ = this.actions$
            .ofType(weather_actions_1.WEATHER_GET)
            .mergeMap(function (action) {
            return Observable_1.Observable.concat(Observable_1.Observable.of(({ type: weather_actions_1.AIR_QUALITY_GET, payload: action.payload })), Observable_1.Observable.of(({ type: weather_actions_1.WEATHER_DATA_GET, payload: action.payload })));
        });
        this.airQualityGet$ = this.actions$
            .ofType(weather_actions_1.AIR_QUALITY_GET)
            .switchMap(function (action) {
            return _this.weatherService.getAirQualityIndex(action.payload.longitude, action.payload.latitude)
                .map(function (response) { return response.text(); })
                .map(function (response) { return ({ type: weather_actions_1.AIR_QUALITY_GET_SUCCESS, payload: response }); })
                .catch(function () { return Observable_1.Observable.of(({ type: weather_actions_1.AIR_QUALITY_GET_FAIL })); });
        });
        this.weatherGet$ = this.actions$
            .ofType(weather_actions_1.WEATHER_GET)
            .switchMap(function (action) {
            return _this.weatherService.getCurrentWeather(action.payload.longitude, action.payload.latitude)
                .map(function (response) { return response.text(); })
                .map(function (response) { return ({ type: weather_actions_1.WEATHER_GET_SUCCESS, payload: response }); })
                .catch(function () { return Observable_1.Observable.of(({ type: weather_actions_1.WEATHER_GET_FAIL })); });
        });
        this.weatherDataGet$ = this.actions$
            .ofType(weather_actions_1.WEATHER_DATA_GET)
            .switchMap(function (action) {
            return _this.weatherService.getWeatherData(action.payload.longitude, action.payload.latitude)
                .map(function (response) { return response.json(); })
                .map(function (response) { return ({ type: weather_actions_1.WEATHER_DATA_GET_SUCCESS, payload: response }); })
                .catch(function () { return Observable_1.Observable.of(({ type: weather_actions_1.WEATHER_DATA_GET_FAIL })); });
        });
    }
    return WeatherEffects;
}());
__decorate([
    effects_1.Effect()
], WeatherEffects.prototype, "init$", void 0);
__decorate([
    effects_1.Effect()
], WeatherEffects.prototype, "airQualityGet$", void 0);
__decorate([
    effects_1.Effect()
], WeatherEffects.prototype, "weatherGet$", void 0);
__decorate([
    effects_1.Effect()
], WeatherEffects.prototype, "weatherDataGet$", void 0);
WeatherEffects = __decorate([
    core_1.Injectable()
], WeatherEffects);
exports.WeatherEffects = WeatherEffects;
