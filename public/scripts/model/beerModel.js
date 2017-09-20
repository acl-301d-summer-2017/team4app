'use strict';

function Beer (rawBeer) {
    this.id = rawBeer.id;
    this.name = rawBeer.name;
    this.styleId = rawBeer.styleId;
    this.abv = rawBeer.abv;
    this.isOrganic = rawBeer.isOrganic;
    this.addToArr();
    this.addToOptions();
}

Beer.all = [];
Beer.prototype.addToArr = function(){
    Beer.all.push(this);

};

Beer.prototype.addToOptions = function () {

    console.log(Beer.all, 'something');
    var $option = $('<option></option>').text(this.name);
    var $option2 = $('<option></option>').text(this.name);
    $('#select_one').append($option);
    $('#select_two').append($option2);

};