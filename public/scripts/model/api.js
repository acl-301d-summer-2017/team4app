// 'use strict';
// var app = app || {};

// (function(module) {
//   const repos = {};

//   repos.all = [];

//   repos.requestRepos = function(callback) {
//     $.ajax ({
//       url: 'http://api.brewerydb.com/v2/search?q=deschutes',
//       method: 'GET',
//       headers: {'Authorization': 'b6a67ef8872287ebd28b7d2e21a13386' }
//     })
//       .then (data=> {
//         repos.all = data
//         console.log(data)
//         callback();
//       })
//     console.log ("data",repos.all);
     
//   }
//   module.repos = repos;
// })(app);
// app.repos.requestRepos();