import {Request, Response, Router} from 'express';
import defineTrailer from '../models/trailer-model';
// require hack
// declare  function require(path: string) : any;
// let sequelize:Sequelize = require('./SequelizeInstance');
import * as sequelize from './SequelizeInstance';
const trailerRouter: Router = Router();

const Trailer = defineTrailer(sequelize);

  trailerRouter.get('/', (request: Request, response: Response) => {
    console.log(' in defineTrailer -----------------> user == ' + JSON.stringify(request['session'].user));
    if (request['session'].user.customer === 'ADMIN')
    {
      console.log('executing findAll on Trailers---------------------');
      Trailer.findAll().then(function (trlrs) {
        response.json(trlrs);
      });
    } else {
      console.log('user was not found in session or user wan\'t admin account');
      response.json({'error': 'Not logging in with administration account'});
    }
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

trailerRouter.delete('/:id', (request: Request, response: Response) => {

  Trailer.destroy({
    where: {
      id: request.params.id //this will be your id that you want to delete
    }
  }).then(function(rowDeleted){ // rowDeleted will return number of rows deleted
    if(rowDeleted >= 1){
      console.log('Deleted successfully');
    }
  }, function(err){
    console.log(err);
  });
});

trailerRouter.get('/:id', (request: Request, response: Response) => {

  Trailer.findById(request.params.id).then(function(trailer) {
    response.json(trailer);
    return trailer;
  });
});

export { trailerRouter }
