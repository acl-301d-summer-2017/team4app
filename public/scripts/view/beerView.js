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
    Beer.all.forEach(x => x.name === $selection ? beerAppendOne(x) : console.log('turnery failed in S1Beer'))
})

$('#select_two').on('change', () => {
    let $selection = $('#select_two').val();
    Beer.all.forEach(x => x.name === $selection ? beerAppendTwo(x) : console.log('turnery failed in S2Beer'))
})

