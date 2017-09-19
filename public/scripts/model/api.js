'use strict';
var app = app || {};
var test = '';
var userInput = '';
var url = '';

$('#search_form').on('submit', function(){
    event.preventDefault();
    console.log('i have been clicked')
    test = $('#beer').val();
    url =  test + '&type=beer';
    $.get({
        url: `/search/${url}`,
        type: 'GET'
    })
    console.log(test);
    console.log(url);

});

