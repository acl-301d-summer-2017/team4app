'use strict';

function beerAppendOne(dataObj) {
    $('#option_one').empty();
    $('#option_one').append(dataObj.html);
    console.log('beerAppend', dataObj.html);
}

function beerAppendTwo(dataObj) {
    $('#option_two').empty();
    $('#option_two').append(dataObj.html);
    console.log('beerAppend', dataObj.html);

}

$('#select_one').on('change', () => {
    var $selection = $('#select_one').val();
    console.log('selection:' , $selection);
    console.log('Brewery Objects',Brewery.all);
    console.log('Beer Objects',Beer.all);
    Beer.all.forEach(function(x){
        if(x.name === $selection){
            beerAppendOne(x); 
        }
    })
    Brewery.all.forEach(function(x){
        if(x.name === $selection){
            breweryAppendOne(x); 
        }
    })
})

$('#select_two').on('change', () => {
    var $selection = $('#select_two').val();
    Beer.all.forEach(function(x){
        if(x.name === $selection){
            beerAppendTwo(x); 
        }
    })
    Brewery.all.forEach(function(x){
        if(x.name === $selection){
            breweryAppendTwo(x); 
        }
    })
})
    
