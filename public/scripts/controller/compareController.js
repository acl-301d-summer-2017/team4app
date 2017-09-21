'use strict';

var app = app || {};

(function(module) {
  const compareController = {};

  compareController.index = () => {
    console.log('compareController has loaded')
    $('#landing').hide()
    $('#about').hide();
    $('#hide_main').show()
  };

  module.compareController = compareController;
})(app);