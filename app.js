import consign from 'consign';
import express from 'express';

const app = express();

consign()
  .include('configs')
  .then('database/firebird.js')
  .then('dao')
  .then('libs/interceptor.js')
  .then('libs/middleware.js')  
  .then('controllers')
  .then('routes')
  .then('libs/boot.js')
  .into(app);
