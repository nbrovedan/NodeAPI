import path from 'path';
import helmet from 'helmet';
import compression from 'compression';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

module.exports = (app) => {
  var interceptor = app.libs.interceptor;
  app.set("port",7070);
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(helmet());
  app.use(compression());
  app.use(cors());
  app.use('/', interceptor.validate)
}
