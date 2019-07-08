'use strict'

const Sequelize = require('sequelize');
const config = require('./config.json')
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});


// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.owners = require('./models/user')(sequelize, Sequelize);
// db.pets = require('../models/pets.js')(sequelize, Sequelize);

//Relations
// db.pets.belongsTo(db.owners);
// db.owners.hasMany(db.pets);

module.exports = db;