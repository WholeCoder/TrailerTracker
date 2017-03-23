import * as express from 'express';
import {json, urlencoded} from 'body-parser';
import * as path from 'path';
import * as compression from 'compression';
var pg = require('pg');
var session = require('express-session');
var pgSession = require('connect-pg-simple')(session);

import {loginRouter} from './routes/login';
import {protectedRouter} from './routes/protected';
import {publicRouter} from './routes/public';
import {feedRouter} from './routes/feed';
import {userRouter} from './routes/user';
import {trailerRouter} from './routes/trailers';

const app: express.Application = express();

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));

app.use(session({
  store: new pgSession({
    pg : pg,                                  // Use global pg-module
    conString : "postgres://postgres:pgsGood&Plenty@localhost:5432/postgres" // Connect using something else than default DATABASE_URL env variable
  }),
  secret: 'rubenjohnathanpierichs',
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}));

app.disable('x-powered-by');

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

// api routes
app.use('/api/secure', protectedRouter);
app.use('/api/login', loginRouter);
app.use('/api/public', publicRouter);
app.use('/api/feed', feedRouter);
app.use('/api/user', userRouter);
app.use('/api/trailers', trailerRouter);

if (app.get('env') === 'production') {

  // in production mode run application from dist folder
  app.use(express.static(path.join(__dirname, '/../client')));
}

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
  const err = new Error('Not Found');
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {

  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message
  });
});

export { app }
