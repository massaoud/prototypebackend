import express from 'express';
import mongoose from 'mongoose';

require('dotenv').config();
mongoose;

import  apiRouter  from './routes/api';

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

/*  **********************BEGIN DB CONNECTION ****************************  */
mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: false
  })
  .then(() => console.log('DATABASE CONNECTED'));
/*  **********************END  DB CONNECTION ****************************  */

/*  **********************ROUTE MIDDLEWARE ****************************  */
app.use('/api',apiRouter);

/* app.get('/', (req, res) => {
  res.json({
    msg: 'ok welcome'
  });
}); */

/*  ********************** ****************************  */

/* var express = require('express');
var app = express();
var exports = module.exports = {};


exports.closeServer = function(){
  server.close();
}; */
