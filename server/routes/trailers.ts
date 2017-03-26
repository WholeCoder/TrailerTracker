import {Request, Response, Router} from 'express';
import defineTrailer from '../models/trailer-model';
// require hack
// declare  function require(path: string) : any;
// let sequelize:Sequelize = require('./SequelizeInstance');
import * as sequelize from './SequelizeInstance';
const trailerRouter: Router = Router();

const Trailer = defineTrailer(sequelize);

  trailerRouter.get('/', (request: Request, response: Response) => {
    Trailer.findAll().then(function(trlrs) {
      response.json(trlrs);
    });
  });

  trailerRouter.post('/', (request: Request, response: Response) => {
    if (request.body.datersnotified == '') {
      request.body.datersnotified = null;
    }
    if (request.body.estimatedtimeofcompletion == '') {
      request.body.estimatedtimeofcompletion = null;
    }
    if (request.body.dateauthorized == '') {
      request.body.dateauthorized = null;
    }
    Trailer.create(request.body);
  });

export { trailerRouter }
