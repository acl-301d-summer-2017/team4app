'use strict';

function Brewery(rawBrewery) {
    this.id = rawBrewery.id;
    this.name = rawBrewery.name;
    this.established = rawBrewery.established;
    this.isOrganic = rawBrewery.isOrganic;
    this.isMassOwned = rawBrewery.isMassOwned;
    this.totalBeers = rawBrewery.totalResults - 1;
    var brewTemplate = this.toHtml();
    this.html = brewTemplate;
    this.addToArr();
    console.log(this.toHtml(), 'asdasd');
    console.log(this.html, 'aasdgdfhdhdghdhfsd')



}

Brewery.all = [];

Brewery.prototype.addToArr = function() {
    Brewery.all.push(this);
};

Brewery.prototype.toHtml = function() {
    let template = Handlebars.compile($('#brewery-template').text());
    return template(this)
}