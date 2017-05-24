import {Request, Response, Router} from 'express';
import * as sequelize from './SequelizeInstance';
import * as CreateUser from '../models/user-model';

const userRouter: Router = Router();


userRouter.post('/', (request: Request, response: Response) => {

  const User = CreateUser(sequelize);

  User.getAuthenticated(request.body.username, request.body.password, function (x, user, error) {
    const resp = error ? {'err': error} : user;
    response.json(resp);
    if (!error) {
      request['session'].user = user;
      request['session'].save();
    }
  });
});

userRouter.get('/', (request: Request, response: Response) => {

  const User = CreateUser(sequelize);

  if (request['session'].user.securityrole === 'MASTER_ADMIN') {
    User.findAll().then(function (usrs) {
      response.json(usrs);
    });
  }
});

userRouter.put('/', (request: Request, response: Response) => {

  const User = CreateUser(sequelize);

  if ((request.body.username !== null) && (request.body.username !== '')
    && (request.body.password !== null) && (request.body.password_confirmation !== '')
    && (request.body.password == request.body.password_confirmation)
    && request.body.customer !== 'ADMIN') {
    sequelize.sync().then(function () {
      return User.create({
        username: request.body.username,
        password: request.body.password,
        customer: request.body.customer
      });
    }).then(function (jane) {

      const resp = jane;
      response.json(resp);
    }).catch(function (reason) {
      response.json({'error': 'could not create'});
    });
  } else {
    response.json({'error': 'could not create'});
  }
});

userRouter.put('/resetpassword', (request: Request, response: Response) => {

  const User = CreateUser(sequelize);

  User.update(request.body, {where: {id: request.body.id}, individualHooks: true}).then(
    function (usr) {
      // response.json(JSON.stringify(usr));
      response.json({'successfully': 'updated'});
    }
  ).catch(
    function (error) {
      console.log('error == ' + error);
    });
});

export {userRouter};
