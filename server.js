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

app.get('/brewery', proxyBrewery );
function proxyBrewery(request, response){
superagent
 .get( 'http://api.brewerydb.com/v2/search?q=')
 .set('Authorization','e42ea843e038e8355fbd8c2717d0f5d3')
 .end(function( err, res){
   console.log(JSON.parse(res.text)); 
   response.send(res)
 })
}

app.get('/search/*', proxyBrewery );
function proxyBrewery(request, response){
  console.log(request.params[0]);
  superagent
  .get( `http://api.brewerydb.com/v2/search?q=${request.params[0]}` )
  .set('Authorization','e42ea843e038e8355fbd8c2717d0f5d3')
  .end(function( err, res){
    console.log('i have been getted ' + `http://api.brewerydb.com/v2search?q=${request.params[0]}`)
    console.log(JSON.parse(res.text)); 
    response.send(res)
  })
}



  app.listen(PORT, function() {
    console.log(`You are on port: ${PORT}`)
  });

  function loadDB() {
    client.query(`
      CREATE TABLE IF NOT EXISTS
      brewery (
        id UNIQUE NOT NULL,
        name VARCHAR(255) UNIQUE NOT NULL,
        established,
        isOrganic,
        isMassOwned,
        totalResults
      );`
    )
    .then()
    .catch(console.error);
  
    client.query(`
      CREATE TABLE IF NOT EXISTS
      beer (
        id UNIQUE NOT NULL,
        name VARCHAR (255),
        styleId,
        abv,
        isOrganic ,
      );`
    )
    .then()
    .catch(console.error);
  }
  

 