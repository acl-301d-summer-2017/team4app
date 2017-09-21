'use strict';

//Creates Beer obj instance.
function Beer(rawBeer) {
    this.id = rawBeer.id;
    this.name = rawBeer.name;
    this.styleId = rawBeer.styleId;
    this.abv = rawBeer.abv;
    this.isOrganic = rawBeer.isOrganic;
    this.description = rawBeer.description;
    this.readyForDOM(rawBeer);
}

Beer.all = [];

//Fills in the remaining property 'brewery'.
//Adds a property 'html' which holds an html element.
//Adds Beer object instance into the 'Beer.all' array.
//Adds a new Beer option to the select forms.
//Saves Beer object instance data to local storage. 
Beer.prototype.readyForDOM = function (rawBeer) {
    this.addExtraProperties(rawBeer);
    this.createHTMLele();
    this.addToArr();
    this.addToOptions();
    this.saveToLocal();
};

//Adds extra properties which must be collected with differnt methods when
//using data from a BreweryDB API Query as opposed to using data from local storage
Beer.prototype.addExtraProperties = function (rawBeer) {
    var brewery;
    if (rawBeer.status) {
        brewery = rawBeer.breweries[0].nameShortDisplay;
    } else { brewery = rawBeer.brewery; }
    this.brewery = brewery;
};

//Creates an HTML element with handlebars.js with information from the properties of the object instance.
Beer.prototype.createHTMLele = function () {
    var template = Handlebars.compile($('#beer-template').text());
    var beerTemplate = template(this);
    this.html = beerTemplate;
};

//Adds Beer object instance to 'Beer.all' array. 
Beer.prototype.addToArr = function () {
    Beer.all.push(this);
};

//Creates an appends to two duplicate option elemnts corresponding to the name
//of the Beer object instance then appends one to each select form. 
Beer.prototype.addToOptions = function () {
    console.log(Beer.all, 'something');
    var $option = $('<option></option>').text(this.name);
    var $option2 = $('<option></option>').text(this.name);
    $('#select_one').append($option);
    $('#select_two').append($option2);
};

//Saves Beer object instance data to local storage with even numbered key values.
Beer.prototype.saveToLocal = function () {
    var localSavedData = JSON.stringify(this);
    localStorage.setItem(Beer.all.length * 2, localSavedData);
};

//If local storage data exists pulls down all data with even number key values corresponding to Beer object data.
if (localStorage) {
    for (var i = 1; i < localStorage.length + 1; i++) {
        if (localStorage.getItem(i * 2)) {
            var savedBeer = JSON.parse(localStorage.getItem(i * 2));
            new Beer(savedBeer);
        }
    }
}
