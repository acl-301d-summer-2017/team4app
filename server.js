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

// app.get('http://api.brewerydb.com/v2/search?q=deschutes&type=brewery&key=e42ea843e038e8355fbd8c2717d0f5d3',(request, response)=>{
//   alert(response);
// });

app.get('/', function(req, res, next) {
  var url = "http://api.brewerydb.com/v2/search";
  var q = req.query.q;

  var Request = unirest
      .get(url)
      .query({key:config.key,q:q});

  Request.end(function(response){
      res.json(response.body);
  });

});

  
  app.listen(PORT, function() {
    console.log(`You are on port: ${PORT}`)
  });