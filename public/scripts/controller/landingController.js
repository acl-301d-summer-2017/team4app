'use strict';

var app = app || {};

(function(module) {
  const landingController = {};

  landingController.index = () => {
    console.log('landingController has loaded')
    $('#hide_main').hide()
    $('#about').hide()
    $('#landing').show()
  };

  module.landingController = landingController;
})(app);