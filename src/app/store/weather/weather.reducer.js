"use strict";
var weather_actions_1 = require("./weather.actions");
exports.weatherReducer = function (state, action) {
    switch (action.type) {
        case weather_actions_1.WEATHER_GET:
            return Object.assign({}, state, {
                isFetching: true,
                airQualityError: false,
                dataError: false,
                forecastError: false
            });
        case weather_actions_1.AIR_QUALITY_GET_SUCCESS:
            return Object.assign({}, state, {
                airQuality: action.payload
            });
        case weather_actions_1.AIR_QUALITY_GET_FAIL:
            return Object.assign({}, state, {
                airQualityError: true
            });
        case weather_actions_1.WEATHER_GET_SUCCESS:
            return Object.assign({}, state, {
                data: action.payload
            });
        case weather_actions_1.WEATHER_GET_FAIL:
            return Object.assign({}, state, {
                dataError: true
            });
        case weather_actions_1.WEATHER_DATA_GET_SUCCESS:
            return Object.assign({}, state, {
                forecast: action.payload,
                isFetching: false
            });
        case weather_actions_1.WEATHER_DATA_GET_FAIL:
            return Object.assign({}, state, {
                forecastError: true,
                isFetching: false
            });
        case weather_actions_1.SELECT_CITY:
            return Object.assign({}, state, {
                selected: action.payload
            });
        default:
            return state;
    }
};
