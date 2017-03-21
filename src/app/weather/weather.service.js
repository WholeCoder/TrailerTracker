"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.mashapeKey = 'O9p2cWOU18mshKOD0m6aBMMVXOrxp1PaIUYjsniijuS94Ib56u';
    }
    /**
     * Air Quality Index
     *
     * @param longitude
     * @param latitude
     * @returns {Observable<Response>}
     */
    WeatherService.prototype.getAirQualityIndex = function (longitude, latitude) {
        return this.http.get("https://simple-weather.p.mashape.com/aqi?lat=" + latitude + "&lng=" + longitude, {
            headers: new http_1.Headers({
                'X-Mashape-Key': this.mashapeKey,
                'Accept': 'text/plain'
            })
        });
    };
    /**
     * Get current weather state
     *
     * @param longitude
     * @param latitude
     * @returns {Observable<Response>}
     */
    WeatherService.prototype.getCurrentWeather = function (longitude, latitude) {
        return this.http.get("https://simple-weather.p.mashape.com/weather?lat=" + latitude + "&lng=" + longitude, {
            headers: new http_1.Headers({
                'X-Mashape-Key': this.mashapeKey,
                'Accept': 'text/plain'
            })
        });
    };
    /**
     * Get weather forecast
     *
     * @param longitude
     * @param latitude
     * @returns {Observable<Response>}
     */
    WeatherService.prototype.getWeatherData = function (longitude, latitude) {
        return this.http.get("https://simple-weather.p.mashape.com/weatherdata?lat=" + latitude + "&lng=" + longitude, {
            headers: new http_1.Headers({
                'X-Mashape-Key': this.mashapeKey,
                'Accept': 'application/json'
            })
        });
    };
    return WeatherService;
}());
WeatherService = __decorate([
    core_1.Injectable()
], WeatherService);
exports.WeatherService = WeatherService;
