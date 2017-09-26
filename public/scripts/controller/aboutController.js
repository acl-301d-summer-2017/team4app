'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('.bio').hide()
    $('#landing').hide()
    $('#hide_main').hide()
    $('#about').show()

    var location;

    $('.profile img').on('click', function(){
      location = $(event.target).parent().siblings()[1]
      $(location).toggle()
    })


  };

  module.aboutController = aboutController;
})(app);