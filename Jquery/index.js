$('#show-btn').click(function (){
    $('.view-1').show();
})

$('#hide-btn').dblclick(function (){
    $('.view-1').hide();
})

$(document).ready(function (){
    $('.view-1').hide();
    $('#about').hide();
    $('#details').hide();
})

$('#btn-home').click(function (){
    $('#home').show();
    $('#about').hide();
    $('#details').hide();
})

$('#btn-about').click(function (){
    $('#home').hide();
    $('#about').show();
    $('#details').hide();
})

$('#btn-details').click(function (){
    $('#home').hide();
    $('#about').hide();
    $('#details').show();
})