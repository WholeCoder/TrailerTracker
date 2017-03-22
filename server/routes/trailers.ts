import {Request, Response, Router} from 'express';
import defineTrailer from '../models/trailer-model';
// require hack
// declare  function require(path: string) : any;
// let sequelize:Sequelize = require('./SequelizeInstance');
import * as sequelize from './SequelizeInstance';
const trailerRouter: Router = Router();

function printProps(obj)
{
  let str = '';
  for (const prop in obj)
  {
    str += prop + '    ' + obj[prop] + '\n';
  }
  console.log('props == ' + str);
}
console.log('-------------- -');
printProps(defineTrailer);
console.log('-------------- - (end)');
// let sequelize:Sequelize = new Sequelize(new config().database_url);
const Trailer = defineTrailer(sequelize);

  trailerRouter.get('/', (request: Request, response: Response) => {
    Trailer.findAll().then(function(trlrs) {
      response.json(trlrs);
      console.log('----------------trailerRouter works!!---------');
    });
  });

  trailerRouter.post('/', (request: Request, response: Response) => {
    console.log('post ============= ' + request.body.unitnumber);
    Trailer.create(request.body);
  });

export { trailerRouter }
