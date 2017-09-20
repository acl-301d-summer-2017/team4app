'use strict';

function Beer (rawBeer) {
    this.id = rawBeer.id;
    this.name = rawBeer.name;
    this.styleId = rawBeer.styleId;
    this.abv = rawBeer.abv;
    this.isOrganic = rawBeer.isOrganic;
    this.addToArr();
}

Beer.all = [];
Beer.prototype.addToArr = function(){
    Beer.all.push(this);

};