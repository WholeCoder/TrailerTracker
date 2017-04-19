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

trailerRouter.post('/', (request: Request, response: Response) => {

  function setDateToNullIfEmptyString() {
    request.body.datersnotified = request.body.datersnotified == '' ? null : request.body.datersnotified;
    request.body.estimatedtimeofcompletion = request.body.estimatedtimeofcompletion == '' ? null : request.body.estimatedtimeofcompletion;
    request.body.dateauthorized = request.body.dateauthorized == '' ? null : request.body.dateauthorized;
  }

  setDateToNullIfEmptyString();

  Trailer.create('datersnotified == ' + request.body.datersnotified);
});

trailerRouter.put('/', (request: Request, response: Response) => {
  console.log('request == ' + (request.body.datersnotified.formatted));
  function getProps(obj) {
    let str = '';
    for (const prop in obj) {
      str += 'obj[' + prop + '] == ' + obj[prop] + '\n';
    }

    return str;
  }

/*
  request.body.datersnotified = new Date('04-01-2017');
  request.body.estimatedtimeofcompletion = new Date('04-01-2017');
  request.body.dateauthorized = new Date('04-01-2017');
  console.log('request.body.datersnotife == ' + request.body.datersnotified);
  console.log('request.body.estimatedtimeofcompletion == ' + request.body.estimatedtimeofcompletion);
  console.log('request.body.dateauthorized == ' + request.body.dateauthorized);
*/

  request.body.datersnotified =  request.body.datersnotified.formatted === null || request.body.datersnotified.formatted.trim() === '' ? null : new Date(request.body.datersnotified.formatted);
  request.body.estimatedtimeofcompletion = request.body.estimatedtimeofcompletion.formatted === null || request.body.estimatedtimeofcompletion.formatted.trim() === '' ? null : new Date(request.body.estimatedtimeofcompletion.formatted);
  request.body.dateauthorized = request.body.dateauthorized.formatted === null || request.body.dateauthorized.formatted.trim() === '' ? null : new Date(request.body.dateauthorized.formatted);

  Trailer.update(request.body, {where: {id: request.body.id}}).then(
    function (trlr) {
      console.log('sucessfully updated == ' + trlr);
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
