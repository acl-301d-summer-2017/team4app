'use strict';

var app = app || {};

(function(module) {
  const compareController = {};

  compareController.index = () => {
    $('#landing').hide()
    $('#about').hide();
    $('#hide_main').show()
  };

  module.compareController = compareController;
})(app);