'use strict';

function Beer(rawBeer) {
    this.id = rawBeer.id;
    this.name = rawBeer.name;
    this.styleId = rawBeer.styleId;
    this.abv = rawBeer.abv;
    this.isOrganic = rawBeer.isOrganic;
    var brewery;
    if (rawBeer.status) {
        brewery = rawBeer.breweries[0].nameShortDisplay;
    } else { brewery = rawBeer.brewery; }
    this.brewery = brewery;
    var beerTemplate = this.toHtml();
    this.html = beerTemplate;
    this.addToArr();
    this.addToOptions();
    this.saveToLocal();
    console.log('what am i', rawBeer.breweries);
}

Beer.all = [];
Beer.prototype.addToArr = function() {
    Beer.all.push(this);

};

Beer.prototype.addToOptions = function() {

    console.log(Beer.all, 'something');
    var $option = $('<option></option>').text(this.name);
    var $option2 = $('<option></option>').text(this.name);
    $('#select_one').append($option);
    $('#select_two').append($option2);

};

Beer.prototype.toHtml = function() {
    let template = Handlebars.compile($('#beer-template').text());
    return template(this)
}

Beer.prototype.saveToLocal = function() {
    var localSavedData = JSON.stringify(this);
    localStorage.setItem(Beer.all.length * 2 , localSavedData);
};

function getFromLocal(key) {
    return JSON.parse(localStorage.getItem(key));
}

if (localStorage) {
    for (var i = 1; i < localStorage.length; i++) {
        if (localStorage.getItem(i*2)) {
            var savedBeer = JSON.parse(localStorage.getItem(i * 2 ));
            console.log('index' , i * 2)
            console.log(savedBeer);
            new Beer(savedBeer);
        }
    }
}