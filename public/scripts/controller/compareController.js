'use strict';

var app = app || {};

(function(module) {
  const compareController = {};

  compareController.index = () => {
    $('#hops').fadeOut(700);
    $('#hops').hide('initial');
    $('#about').hide();
    $('#hide_main').show()
  };

  module.compareController = compareController;
})(app);