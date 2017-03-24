import {Request, Response, Router} from "express";

const publicRouter: Router = Router();

publicRouter.get('/simple', (request: Request, response: Response) => {
  // console.log("request.session == " + request.session);
  console.log('request.session == ' + request["session"].count);
  if (request["session"].count == undefined)
  {
    request["session"].count = 1;
  } else {
    request["session"].count++;
  }
  // request.cookies.session.count = 10;
  // console.log("cookies.sessionStorage.getItem == "+request.cookies.sessionStorage.getItems("count"))
    response.json({
      title: 'Greetings.',
      text: 'Hello Angular 2',
      sessioncount: request["session"].count
    });
  // console.log('username================= "+request.session.username);
});

export { publicRouter }
