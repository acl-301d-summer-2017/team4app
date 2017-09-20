'use strict';

function Brewery (rawBrewery) {
    this.id = rawBrewery.id;
    this.name = rawBrewery.name;
    this.established = rawBrewery.established;
    this.isOrganic = rawBrewery.isOrganic;
    this.isMassOwned = rawBrewery.isMassOwned;
    this.totalBeers = rawBrewery.totalResults - 1;
    this.addToArr();

}

Brewery.all = []; 

Brewery.prototype.addToArr = function(){
    Brewery.all.push(this);
};

