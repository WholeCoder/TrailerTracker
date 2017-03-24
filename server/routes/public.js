"use strict";
var express_1 = require("express");
var publicRouter = express_1.Router();
exports.publicRouter = publicRouter;
publicRouter.get('/simple', function (request, response) {
    // console.log("request.session == " + request.session);
    console.log('request.cookies.session == ' + request.session);
    if (!request.session) {
        request.session = { count: 10 };
    }
    else {
        request.session.count++;
    }
    // request.cookies.session.count = 10;
    // console.log("cookies.sessionStorage.getItem == "+request.cookies.sessionStorage.getItems("count"))
    response.json({
        title: 'Greetings.',
        text: 'Hello Angular 2',
        sessioncount: request.session.count
    });
    // console.log('username================= "+request.session.username);
});
