"use strict";
const Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
const userModel = require('../../../models/user')
const db = require('../../../db')

class user {

    async saveUserProfile(req, res) {


        db.owners.sync().then(() => {

            db.owners.create(req.body)
                .then(newOwner => {
                    res.json(newOwner);
                })
        })



    }
}
module.exports = new user();