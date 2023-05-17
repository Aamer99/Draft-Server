require('dotenv').config();
var express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

mongoose.connect(process.env.DATABASE_ACCESS, { useNewUrlParser:true});
const db = mongoose.connection;
db.on('error', (error)=>console.log(error));
db.once('open', ()=>console.log('connected to mongodb'));
var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const unApprovedUsers= require('./routes/unApprovedUsers');
app.use('/draftDB/unapproved-users', unApprovedUsers);
app.listen(3000, function () {
  console.log('the draft api work on port 3000!');
});