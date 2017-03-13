import { Router, Response, Request } from 'express';
import * as Sequelize from 'sequelize';
// let Trailer = require('../models/trailer-model');
import * as defineTrailer from '../models/trailer-model';
const trailerRouter: Router = Router();
import { config } from '../config_db';

let sequelize:Sequelize.Sequelize = new Sequelize.Sequelize(new config().database_url);
let Trailer = defineTrailer(sequelize);

trailerRouter.get('/', (request: Request, response: Response) => {
  response.json(Trailer.findAll());
});

export { trailerRouter }
