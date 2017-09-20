'use strict';

Beer.all.forEach(function(){
    console.log(Beer.all, 'something');
    var $option = $('<option></option>');
    $('#select_one').append($option);
});