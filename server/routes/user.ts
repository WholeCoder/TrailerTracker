import { Router, Response, Request } from "express";
import * as sequelize from './SequelizeInstance';
import * as CreateUser from '../models/user-model';

const userRouter: Router = Router();


userRouter.post("/", (request: Request, response: Response) => {

let User = CreateUser(sequelize);

  // response.json({"worked":"this"});
  User.getAuthenticated(request.body.username, request.body.password,function(x, user, error){
    let resp = error ? {"err":error} : user;
    response.json(resp);
  });
 });

export { userRouter };
