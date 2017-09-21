'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    console.log('aboutController has loaded')
    $('#landing').hide()
    $('#hide_main').hide()
    $('#about').show()
  };

  module.aboutController = aboutController;
})(app);