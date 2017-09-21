'use strict';

console.log('Node has loaded!');

require('dotenv').config();
const superagent = require('superagent');
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

app.get('/compare', function(request, response ){
    response.sendFile('/index.html', {root: './public'} )
  
  });

app.get('/about', function(request, response ){
    response.sendFile('/index.html', {root: './public'} )
  
  });


app.get('/search/*', proxyBrewery );
function proxyBrewery(request, response){
  // console.log(request.params[0]);
  superagent
  .get( `http://api.brewerydb.com/v2/search?q=${request.params[0]}` )
  .set('Authorization','e42ea843e038e8355fbd8c2717d0f5d3')
  .end(function( err, res){
    // console.log('i have been getted ' + `http://api.brewerydb.com/v2search?q=${request.params[0]}`)
    // console.log(JSON.parse(res.text));
    if (JSON.parse(res.text).totalResults) {
   // console.log(JSON.parse(res.text).data); 
    var beerObj = JSON.parse(res.text).data[0];
    response.send(beerObj)
    }
  })
}

app.get('/brewery/*', breweryId );
function breweryId(request, response){
  console.log(request.params[0]);
  superagent
  .get( `http://api.brewerydb.com/v2/brewery/${request.params[0]}/beers` )
  .set('Authorization','e42ea843e038e8355fbd8c2717d0f5d3')
  .end(function( err, res){
    console.log('i have been getted ' + `http://api.brewerydb.com/v2/brewery/${request.params[0]}/beers`)
   var beerLength = JSON.parse(res.text).data;
   response.send(beerLength);
   console.log('i am res.data' , beerLength);
  })
}


  app.listen(PORT, function() {
    console.log(`You are on port: ${PORT}`)
  });

  
  

 