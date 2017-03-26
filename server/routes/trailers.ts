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

    function setDateToNullIfEmptyString() {
      request.body.datersnotified = request.body.datersnotified == '' ? null : request.body.datersnotified;
      request.body.estimatedtimeofcompletion = request.body.estimatedtimeofcompletion == '' ? null : request.body.estimatedtimeofcompletion;
      request.body.dateauthorized = request.body.dateauthorized == '' ? null : request.body.dateauthorized;
    }

    setDateToNullIfEmptyString();

    Trailer.create(request.body);
  });

export { trailerRouter }
