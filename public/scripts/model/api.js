'use strict';
var app = app || {};
var test = '';
var userInput = '';
var url = '';


$('#search_form').on('submit', function(){
    event.preventDefault();
    console.log('i have been clicked')
    test = $('#beer').val();
    var typeTest = test + '&type=';
   var buttonChoice =  $('input[name=radio]:checked', '#search_form').val();
   var selection = typeTest + buttonChoice;
   console.log(selection)
    // $('#brewery_choice').prop('checked', true) ? url =  test + '&type=brewery' : url = test + '&type=beer';
    // if ($('#brewery_choice').prop('checked', true)){
    //     url = test + '&type=brewery'
    //     console.log('brewery was checked')
    // }
    // else if ($('#beer_choice').prop('checked', true)){
    //     url = test + '&type=beer'
    //     console.log('beer was checked')
    // }
    // else {
    //      prompt('click a button')
    // }
    $.get({
        url: `/search/${selection}`,
        type: 'GET'
    })
    console.log(test);
    console.log(url);

});



