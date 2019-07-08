const express = require('express')
const app = new express();



const routes = [
    require('./user/userRoute/userRoute'),

];

module.exports = function router(app, db) {
    return routes.forEach((route) => {
        route(app, db);
    });
};


