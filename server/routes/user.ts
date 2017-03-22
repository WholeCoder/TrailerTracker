import { Router, Response, Request } from "express";
import * as sequelize from './SequelizeInstance';
import * as CreateUser from '../models/user-model';

const userRouter: Router = Router();


userRouter.post("/", (request: Request, response: Response) => {

  const User = CreateUser(sequelize);

  // response.json({"worked":"this"});
  User.getAuthenticated(request.body.username, request.body.password,function(x, user, error){
    const resp = error ? {"err":error} : user;
    response.json(resp);
  });
});

userRouter.put('/', (request: Request, response: Response) => {

  const User = CreateUser(sequelize);

  sequelize.sync().then(function() {
    return User.create({
      username: request.body.username,
      password: request.body.password
    });
  }).then(function(jane) {
    console.log(jane.get({
      plain: true
    }));
    const resp = jane ? {"err":jane} : jane;
    response.json(resp);
  });
});

export { userRouter };
