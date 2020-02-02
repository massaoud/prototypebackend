import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

require('dotenv').config();


import task1Router from './routes/task1Router';
import task2Router from './routes/task2Router';
import task3Router from './routes/task3Router';
import task4Router from './routes/task4Router';
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
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

/*  ********************** MIDDLEWARE ****************************  */

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
/*  ********************** ****************************  */

/*  ********************** ROUTE MIDDLEWARE ****************************  */


app.use('/api', task1Router);
app.use('/api', task2Router);
app.use('/api', task3Router);
app.use('/api', task4Router);

/*  **********************  ****************************  */
