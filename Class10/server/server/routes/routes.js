
//external import
const express = require('express');
const route = express.Router();

//intrnal import
const controll = require('../controller/controll');

route.post('/api/save', controll.saveData);

route.get('/api/read', controll.showData);

module.exports = route;
