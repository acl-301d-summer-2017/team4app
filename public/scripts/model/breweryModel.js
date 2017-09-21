'use strict';


//Creates Brewery object instances. 
function Brewery(rawBrewery) {
    this.id = rawBrewery.id;
    this.name = rawBrewery.name;
    this.established = rawBrewery.established;
    this.isOrganic = rawBrewery.isOrganic;
    this.isMassOwned = rawBrewery.isMassOwned;
    this.description = rawBrewery.description;
    this.selector = rawBrewery.selector;
    this.getProperties(rawBrewery);
    this.addToOptions();
}

//Holds all brewery oject instances. 
Brewery.all = [];

//Adds 'beerCount' and 'html' properties to each object instance after 
//a response to our get request is received from breweryDB API for beer count.
//If Brewery instances are created using local storage data the properties 'beerCount' and 'html'
//are filled with data gathered from our Brewery object instances saved in local storage.
//Adds Brewery object instances to Brewery.all array once all properties are filled.
Brewery.prototype.getProperties = function(rawBrewery){
    if(!rawBrewery.beerCount){//If rawBrewery has no value for 'beerCount' query BreweryDB API for 'beerCount' value
        this.getBeerList();
    } else {//If rawBrewery has a value for property 'beerCount' set 'beerCount' = rawBrewery.beerCount;
        this.beerCount = rawBrewery.beerCount;
        this.html = rawBrewery.html;
        this.addToArr();
     }

}

//Adds Brewery object instance to Brewery.all array. 
Brewery.prototype.addToArr = function() {
    Brewery.all.push(this);
};

//Creates HTML element based on object instance properties. 
Brewery.prototype.toHtml = function() {
    let template = Handlebars.compile($('#brewery-template').text());
    return template(this)
}

//Query BreweryDB API for beer count based on brewery id porperty. 
//After reponse sets 'beerCount' then creates an html elment based on brewery object instance properties.
//Adds object instance to Brewery.all array once all properties have been given value. 
//Saves Brewery object instance to local storage. 
//Appends to DOM inside #option_one or #option_two depending on 'selector' property. 
Brewery.prototype.getBeerList = function () {
    $.get({
        url: `/brewery/${this.id}`,
        type: 'GET'
    })
    .then( dataObj => {
        this.beerCount = dataObj.length;
        var brewTemplate = this.toHtml();
        this.html = brewTemplate;
        this.addToArr();
        this.saveToLocal();
        if(this.selector === 1){
        breweryAppendOne(this);
        } else {breweryAppendTwo(this)}
    })
}

//Adds a select option html element equal to Brewery object instance 'name' property to the DOM. 
Brewery.prototype.addToOptions = function() {
        var $option = $('<option></option>').text(this.name);
        var $option2 = $('<option></option>').text(this.name);
        $('#select_one').append($option);
        $('#select_two').append($option2);
    };

//Saves brewery instance to local storage. 
Brewery.prototype.saveToLocal = function() {
        var localSavedData = JSON.stringify(this);
        localStorage.setItem(( Brewery.all.length * 2 ) + 1 , localSavedData);
};

//If localStorage exists pulls down saved Brewery object data saved to locol storage.
//pulls down only localStorage data with odd number key values which correspond to brewery data.
function reCreateBreweryObj() {
    if (localStorage) {
        for (var i = 1; i < localStorage.length + 1; i++) {
            if (localStorage.getItem((i * 2) + 1)) {
                var savedBrewery = JSON.parse(localStorage.getItem((i * 2) + 1));
                new Brewery(savedBrewery);
            }
        }
    }
}
reCreateBreweryObj();
