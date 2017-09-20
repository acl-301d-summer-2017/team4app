'use strict';

function beerAppendOne(dataObj) {
    $('#option_one').append(dataObj.html);
    console.log('beerAppend' , dataObj.html);
}

function beerAppendTwo(dataObj) {
    $('#option_two').append(dataObj.html);
    console.log('beerAppend' , dataObj.html);
}