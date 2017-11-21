// SETUP
// ===============================
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import Router from './utils/router'
import api from './api'

// CONFIGS
// ===============================
const app  = express();
const port = process.env.PORT || 3020;
const state = {
  status: 0,
  date: null
}

app.set('state', state);

// bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// disable powered by header
app.disable('x-powered-by')

// logger
app.use(logger((tokens, req, res) => {
  let status = res.statusCode
    , len = parseInt(res.getHeader('Content-Length'), 10)
    , color = 32;

  if (status >= 500) color = 31;
  else if (status >= 400) color = 33;
  else if (status >= 300) color = 36;

  len = isNaN(len) ? '' : ' - ' + len;

  return '\x1b[90m' + req.method
    + ' ' + req.originalUrl + ' '
    + '\x1b[' + color + 'm' + res.statusCode
    + ' \x1b[90m'
    + (new Date - req._startTime)
    + 'ms' + len
    + '\x1b[0m';
}));

// cookies
app.use(cookieParser())

// cors
app.use(Router.allowCrossOrigin);

// ROUTES
// ===============================
Router.setRouter(express.Router());
Router.register('/update', api.Update);
Router.register('/status', api.Status);

// prefix with /api
app.use('/', Router.router);

// START SERVER
// ===============================
app.listen(port)
console.log('Server started on port ' + port)
