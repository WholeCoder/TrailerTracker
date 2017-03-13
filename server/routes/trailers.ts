import { Router, Response, Request } from 'express';
// let Trailer = require('../models/trailer-model');
import { Trailer } from '../models/trailer-model';
const trailerRouter: Router = Router();

trailerRouter.get('/', (request: Request, response: Response) => {
  response.json(Trailer.findAll());
});

export { trailerRouter }
