'use strict';

//Removes elements from #option_one container.
//Appends HTML element containing brewery information to the DOM inside #option_one container.
function breweryAppendOne(BreweryObj) {
    $('#option_one').empty();
    $('#option_one').append(BreweryObj.html);
}

//Removes elements from #option_two container.
//Appends HTML element containing brewery information to the DOM inside #option_two container.
function breweryAppendTwo(BreweryObj) {
    $('#option_two').empty();
    $('#option_two').append(BreweryObj.html);
}

//Removes elements from #option_one container.
//Appends HTML element containing brewery information to the DOM inside #option_one container.
function beerAppendOne(dataObj) {
    $('#option_one').empty();
    $('#option_one').append(dataObj.html);
}

//Removes elements from #option_two container.
//Appends HTML element containing beer information to the DOM inside #option_two container.
function beerAppendTwo(dataObj) {
    $('#option_two').empty();
    $('#option_two').append(dataObj.html);

}

//Listens for change in #select_one drop down menu.
//Appends html element to #option_one containing infromation corresponding to the selection. 

$('#select_one').on('change', () => {//Seraches thorugh Beer.all for selection, appends to DOM if found.
    var $selection = $('#select_one').val();
    Beer.all.forEach(function (BeerObj) {
        if (BeerObj.name === $selection) {
            beerAppendOne(BeerObj);
        }
    })
    Brewery.all.forEach(function (BreweryObj) {//Seraches thorugh Brewery.all for selection, appends to DOM if found.
        if (BreweryObj.name === $selection) {
            breweryAppendOne(BreweryObj);
        }
    })
})

//Listens for change in #select_two drop down menu.
//Appends html element to #option_two containing infromation corresponding to the selection. 

$('#select_two').on('change', () => {
    var $selection = $('#select_two').val();
    Beer.all.forEach(function (BeerObj) {//Seraches thorugh Beer.all for selection, appends to DOM if found.
        if (BeerObj.name === $selection) {
            beerAppendTwo(BeerObj);
        }
    })
    Brewery.all.forEach(function (BreweryObj) {//Seraches thorugh Brewery.all for selection, appends to DOM if found.
        if (BreweryObj.name === $selection) {
            breweryAppendTwo(BreweryObj);
        }
    })
})

