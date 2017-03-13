import { Router, Response, Request } from 'express';
import * as Sequelize from 'sequelize';
// let Trailer = require('../models/trailer-model');
import { defineTrailer } from '../models/trailer-model';
const trailerRouter: Router = Router();
import { config } from '../config_db';

function printProps(obj)
{
  var str = "";
  for (var prop in obj)
  {
    str += prop + '    ' + obj[prop] + '\n';
  }
  console.log("props == "+str);
}
let sequelize:Sequelize.Sequelize = new Sequelize.Sequelize(new config().database_url);
console.log("\n---------------\n");
printProps(defineTrailer);
console.log("\n---------------(end)\n");
let Trailer = defineTrailer.defineTrailer(sequelize);
//
trailerRouter.get('/', (request: Request, response: Response) => {
  response.json(Trailer.findAll());
});

export { trailerRouter }
