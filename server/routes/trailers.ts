import { Router, Response, Request } from 'express';
import { Instance, DataTypes } from 'sequelize';
// let Trailer = require('../models/trailer-model');
import defineTrailer from '../models/trailer-model';
const trailerRouter: Router = Router();
import { config } from '../config_db';
// require hack
// declare  function require(path: string) : any;
// let sequelize:Sequelize = require('./SequelizeInstance');
import * as sequelize from './SequelizeInstance';
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

Trailer.findAll().then(function(trlrs) {
  trailerRouter.get('/', (request: Request, response: Response) => {
    response.json(trlrs);
  });
})

export { trailerRouter }
