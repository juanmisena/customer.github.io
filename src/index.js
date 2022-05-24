// package's
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
require('dotenv').config({path: './src/.env'});
const app = express();
// importing to routes
const customerRoutes = require('./routes/customer');
// settings
const port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// dbOptions settings
const dbOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
}
// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, dbOptions, 'single'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// routes
app.use('/', customerRoutes);
// starting the server
app.listen(port , () => console.log('> Server is up and running on port : ' + port));