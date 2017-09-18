'use strict';

console.log('Node has loaded!');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const pg = require('pg');
const requestProxy = require('express-request-proxy');
const bodyParser = require('body-parser').urlencoded({ extended: true });

app.use( express.static( './public' ));

app.get('/', function(request, response ){
    response.sendFile('/index.html', {root: './public'} )
  
  });
  
  app.listen(PORT, function() {
    console.log(`You are on port: ${PORT}`)
  });