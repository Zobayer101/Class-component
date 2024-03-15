
const express = require('express');
const route = express.Router();

const controll = require('../controller/controll');

//api save data link;
route.post('/api/link/save', controll.LinkSave);

//api link red on database
route.get('/api/link/read',)

module.exports = route;