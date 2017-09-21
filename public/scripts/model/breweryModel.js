'use strict';

function Brewery(rawBrewery) {
    this.id = rawBrewery.id;
    this.name = rawBrewery.name;
    this.established = rawBrewery.established;
    this.isOrganic = rawBrewery.isOrganic;
    this.isMassOwned = rawBrewery.isMassOwned;
    this.description = rawBrewery.description;
    this.selector = rawBrewery.selector;
    
    if (!rawBrewery.beerCount){this.getBeerList();}else{
        this.beerCount = rawBrewery.beerCount;
        this.html = rawBrewery.html;
        this.addToArr();
     }
    this.addToOptions();
    console.log(this)
    console.log('after connstruction', Brewery.all)
}

Brewery.all = [];

Brewery.prototype.addToArr = function() {
    Brewery.all.push(this);
};

Brewery.prototype.toHtml = function() {
    let template = Handlebars.compile($('#brewery-template').text());
    return template(this)
}

Brewery.prototype.getBeerList = function () {
    $.get({
        url: `/brewery/${this.id}`,
        type: 'GET'
    })
    .then( dataObj => {
        this.beerCount = dataObj.length;
        console.log('beerCount' , dataObj.length);
        var brewTemplate = this.toHtml();
        this.html = brewTemplate;
        this.addToArr();
        this.saveToLocal();
        if(this.selector === 1){
        breweryAppendOne(this);
        } else {breweryAppendTwo(this)}
    })
}

Brewery.prototype.addToOptions = function() {
    
        console.log(Beer.all, 'something');
        var $option = $('<option></option>').text(this.name);
        var $option2 = $('<option></option>').text(this.name);
        $('#select_one').append($option);
        $('#select_two').append($option2);
    
    };

Brewery.prototype.saveToLocal = function() {
        var localSavedData = JSON.stringify(this);
        localStorage.setItem(( Brewery.all.length * 2 ) + 1 , localSavedData);
    };

    if (localStorage) {
        for (var i = 1; i < localStorage.length + 1; i++) {
            if (localStorage.getItem( ( i * 2 ) + 1 ) ) {
                var savedBrewery = JSON.parse(localStorage.getItem( (i * 2) + 1 ) );
                //console.log('index' , (i * 2) + 1 )
                console.log('pulling breweries to local storage', savedBrewery);
                new Brewery(savedBrewery);
            }
        }
    }
    