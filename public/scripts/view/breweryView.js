'use strict';

function breweryAppendOne(dataObj) {
    $('#option_one').empty();
    $('#option_one').append(dataObj.html);
}

function breweryAppendTwo(dataObj) {
    $('#option_two').empty();
    $('#option_two').append(dataObj.html);
}

$('#select_one').on('change', () => {
    let $selection = $('#select_one').val();
    Brewery.all.forEach(x => x.name === $selection ? breweryAppendOne(x) : console.log('turnery failed in S1Beer'))
})

$('#select_two').on('change', () => {
    let $selection = $('#select_two').val();
    Brewery.all.forEach(x => x.name === $selection ? breweryAppendTwo(x) : console.log('turnery failed in S2Beer'))
})