'use strict';

console.log('Node has loaded!');

require('dotenv').config();
const superagent = require('superagent');
const PORT = process.env.PORT || 3000;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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
 .get( 'http://api.brewerydb.com/v2/beers')
 .set('Authorization','e42ea843e038e8355fbd8c2717d0f5d3')
 .end(function( err, res){
   console.log(JSON.parse(res.text)); 
   response.send(res)
 })
}

// function proxyBrewery(request, response){
//   (requestProxy({
//     url: 'https://api.brewerydb.com/v2/search?q=deschutes',
//     method: 'GET',
//     headers: {'Authorization': 'b6a67ef8872287ebd28b7d2e21a13386' }
//   }))(request, response);
// }


  // var req = new XMLHttpRequest();
  // var URL = 'http://api.brewerydb.com/v2/search?q=deschutes&type=brewery&key=e42ea843e038e8355fbd8c2717d0f5d3'

  // req.open('GET', URL, true);

  // req.addEventListener('load', function(){
  //   var response = JSON.parse(req.responseText); 
  //   console.log('working');
  // });

  // function mytest(){
  //   var response = JSON.parse(req.responseText); 
  //   console.log('working');
  // }

// app.get('http://api.brewerydb.com/v2/search?q=deschutes&type=brewery&key=e42ea843e038e8355fbd8c2717d0f5d3',(request, response)=>{
//   alert(response);
// });

// app.get('/', function(req, res, next) {
//   var url = "http://api.brewerydb.com/v2/search";
//   var q = req.query.q;

//   var Request = unirest
//       .get(url)
//       .query({key:config.key,q:q});

//   Request.end(function(response){
//       res.json(response.body);
//   });

// });

  
  app.listen(PORT, function() {
    console.log(`You are on port: ${PORT}`)
  });

 