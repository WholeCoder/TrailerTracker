import { Router, Response, Request } from "express";
import * as sequelize from './SequelizeInstance';
import * as CreateUser from '../models/user-model';

const userRouter: Router = Router();


userRouter.post("/", (request: Request, response: Response) => {

  let User = CreateUser(sequelize);
  User.getAuthenticated(request.body.username, request.body.password,function(err, user){
    response.json({"logged":"in"});
  });
});

export { userRouter };
