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
  if (request['session'].user.customer === 'ADMIN') {
    console.log('executing findAll on Trailers---------------------');
    Trailer.findAll().then(function (trlrs) {
      response.json(trlrs);
    });
  } else {
    console.log('user was not found in session or user wan\'t admin account');
    response.json({'error': 'Not logging in with administration account'});
  }
});

function resolveNullAndEmptyValuesOnDates(requestbod: any) {

  function getProps(obj)
  {
    let str = '';
    for (const prop in obj)
    {
      str += 'obj[' + prop + '] = ' + obj[prop] + '\n';
    }
    return str;
  }
  console.log('requestbod.datersnotified == ' + (requestbod.datersnotified.formatted));
  console.log('requestbod.estimatedtimeofcompletion == ' + requestbod.estimatedtimeofcompletion.formatted);
  console.log('requestbod.dateauthorized == ' + requestbod.dateauthorized.formatted);

  requestbod.datersnotified = requestbod.datersnotified.formatted[0] === null ? null : new Date(requestbod.datersnotified.formatted);
  requestbod.estimatedtimeofcompletion = requestbod.estimatedtimeofcompletion.formatted[0] === null ? null : new Date(requestbod.estimatedtimeofcompletion.formatted);
  requestbod.dateauthorized = requestbod.dateauthorized.formatted[0] === null ? null : new Date(requestbod.dateauthorized.formatted);
}

trailerRouter.post('/', (request: Request, response: Response) => {

  resolveNullAndEmptyValuesOnDates(request.body);

  Trailer.create(request.body);
});

trailerRouter.put('/', (request: Request, response: Response) => {

  resolveNullAndEmptyValuesOnDates(request.body);

  Trailer.update(request.body, {where: {id: request.body.id}}).then(
    function (trlr) {
      console.log('sucessfully updated == ' + trlr);
      // response.json(JSON.stringify(trlr));
    }
  ).catch(
    function (error) {
      console.log('error == ' + error);
    });
});
trailerRouter.delete('/:id', (request: Request, response: Response) => {

  Trailer.destroy({
    where: {
      id: request.params.id //this will be your id that you want to delete
    }
  }).then(function (rowDeleted) { // rowDeleted will return number of rows deleted
    if (rowDeleted >= 1) {
      console.log('Deleted successfully');
    }
  }, function (err) {
    console.log(err);
  });
});

trailerRouter.get('/:id', (request: Request, response: Response) => {

  Trailer.findById(request.params.id).then(function (trailer) {
    response.json(trailer);
    return trailer;
  });
});

export {trailerRouter}
