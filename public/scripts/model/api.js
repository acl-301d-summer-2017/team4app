'use strict';
var app = app || {};

//Listens for search requests made by the user when submit is clicked.
$('#search_form').on('submit', function () {
    event.preventDefault();
    //'beerOrBrewery' will control whether the data returned from the API Query will be passed into
    // a Brewery constructor or a Beer constructor
    var beerOrBrewery = $('input[name=radio]:checked', '#search_form').val();
    if (beerOrBrewery) {//Only queries API if the user has selected 'Brewery' or 'Beer'.
        var choice1 = $('#choice1').val() + '&type=';
        var choice2 = $('#choice2').val() + '&type=';
        var apiQueryUrl1 = choice1 + beerOrBrewery + '&withBreweries=Y';
        var apiQueryUrl2 = choice2 + beerOrBrewery + '&withBreweries=Y';
        breweryDBQuery1(apiQueryUrl1, beerOrBrewery);
        breweryDBQuery2(apiQueryUrl2, beerOrBrewery);
    } else {
        alert('please choose a type');
    }
    event.target.reset();
});

function breweryDBQuery1(apiQueryUrl1, beerOrBrewery) {
    $.get({//Makes a 'GET' request to the server passing 'apiQueryUrl1'
        url: `/search/${apiQueryUrl1}`,
        type: 'GET'
    })
        .then(dataObj => {//Passes response to 'Beer' or 'Brewery' constructor depending on beerOrBrewery value.
            if (beerOrBrewery === 'beer') {
                beerAppendOne(new Beer(dataObj));
            } else {
                $('#option_one').empty();
                dataObj.selector = 1;
                new Brewery(dataObj);
            }
        })

}

function breweryDBQuery2(apiQueryUrl2, beerOrBrewery) {
    $.get({//Makes a 'GET' request to the server passing 'apiQueryUrl2'
        url: `/search/${apiQueryUrl2}`,
        type: 'GET'
    })
        .then(dataObj => {//Passes response to 'Beer' or 'Brewery' constructor depending on beerOrBrewery value
            if (beerOrBrewery === 'brewery') {
                $('#option_two').empty();
                dataObj.selector = 2;
                new Brewery(dataObj)
            } else {
                $('#option_two').empty();
                beerAppendTwo(new Beer(dataObj))
            }
        })
}