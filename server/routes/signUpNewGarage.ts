import { Router, Request, Response, NextFunction } from 'express';
import { randomBytes, pbkdf2 } from 'crypto';
import { sign } from 'jsonwebtoken';
import { secret, length, digest } from '../config';
import {loginRouter} from './login';

const newGarageRouter: Router = Router();

newGarageRouter.post('/admin', function (request: Request, response: Response, next: NextFunction) {
  if (!request.body.hasOwnProperty('password')) {
    const err = new Error('No password');
    return next(err);
  }

/*  const salt = randomBytes(128).toString('base64');

  pbkdf2(request.body.password, salt, 10000, length, digest, (err: Error, hash: Buffer) => {
    response.json({
      hashed: hash.toString('hex'),
      salt: salt
    });
  });*/
  response.json({'works': 'dummy'});
});

export { newGarageRouter }
