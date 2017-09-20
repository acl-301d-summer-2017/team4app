'use strict';
var app = app || {};
var choice1 = '';
var choice2 = '';


$('#search_form').on('submit', function(){
    event.preventDefault();
    var buttonChoice;
    //  $('input[name=radio]:checked', '#search_form').val() ? buttonChoice =  $('input[name=radio]:checked', '#search_form').val() : alert('Please choose button')
    buttonChoice = $('input[name=radio]:checked', '#search_form').val();
    if(buttonChoice){
    console.log('i have been clicked')
    choice1 = $('#choice1').val();
    choice2 = $('#choice2').val();
    var typeTest = choice1 + '&type=';
    var typeTest2 = choice2 + '&type=';
   var selection = typeTest + buttonChoice;
   var selection2 = typeTest2 + buttonChoice;
   console.log(selection)
    $.get({
        url: `/search/${selection}`,
        type: 'GET'
    })
      .then(dataObj => {
        if(buttonChoice === 'beer'){
        new Beer(dataObj)
        } else {new Brewery(dataObj)}
        console.log(dataObj);
      })
    $.get({
        url: `/search/${selection2}`,
        type: 'GET'
    })
      .then(dataObj => {
        if(buttonChoice === 'brewery'){
        new Brewery(dataObj)
        } else {new Beer(dataObj)}
      console.log(Brewery.all);
      console.log(Beer.all);
      console.log(dataObj);
      })
    
    } else {alert('please choose a type')}
});





