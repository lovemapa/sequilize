"use strict";


const express = require('express');
const app = new express();
const Sequelize = require('sequelize');
const config = require('./config.json')
const router = require('./server/routes')
const bodyParser = require('body-parser')
const db = require('./db')
const port = 4000;



const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



sequelize
  .authenticate()
  .then(() => {
    console.log('Database Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

router(app, db);

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`  🌍   app listening on port ${port}!`))
})

module.exports = app, db;