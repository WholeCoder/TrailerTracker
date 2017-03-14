import { Router, Response, Request } from 'express';
import { Instance, Sequelize, DataTypes } from '@types/sequelize';
// let Trailer = require('../models/trailer-model');
import defineTrailer from '../models/trailer-model';
const trailerRouter: Router = Router();
import { config } from '../config_db';
import { require } from '@types/node';
var sequelize:Sequelize = require('./SequelizeInstance');

function printProps(obj)
{
  var str = "";
  for (var prop in obj)
  {
    str += prop + '    ' + obj[prop] + '\n';
  }
  console.log("props == "+str);
}
console.log("\n---------------\n");
printProps(defineTrailer);
console.log("\n---------------(end)\n");
// let sequelize:Sequelize = new Sequelize(new config().database_url);
let Trailer = defineTrailer(sequelize);
//
// trailerRouter.get('/', (request: Request, response: Response) => {
//   // response.json(Trailer.findAll());
// });

export { trailerRouter }
