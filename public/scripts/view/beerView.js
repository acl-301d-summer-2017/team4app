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
    let $selection = $('#select_one').val();
    console.log('selection:' , $selection);
    console.log('Brewery Objects',Brewery.all);
    console.log('Beer Objects',Beer.all);

    Beer.all.forEach(x => x.name === $selection ? beerAppendOne(x) : console.log('turnery failed in S1Beer'))
    Brewery.all.forEach(x => x.name === $selection ? breweryAppendOne(x) : console.log('turnery failed in S1Brewery'))
})

$('#select_two').on('change', () => {
    let $selection = $('#select_two').val();
    Beer.all.forEach(x => x.name === $selection ? beerAppendTwo(x) : console.log('turnery failed in S2Beer'))
    Brewery.all.forEach(x => x.name === $selection ? breweryAppendTwo(x) : console.log('turnery failed in S1Beer'))
    
})
