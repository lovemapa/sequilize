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

    async getDetails(req, res) {
        db.owners
            .findAndCountAll({
            })
            .then(result => {
                res.json(result);

            });
    }
}
module.exports = new user();