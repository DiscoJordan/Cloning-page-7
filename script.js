"use strict"
$(document).ready(function (){
    $('.burger').click(function(event) {
        $('.side-bar, .content').toggleClass('active');
    });
    $('.close').click(function(event) {
        $('.terms').toggleClass('active');
    });
    $('.hide').click(function(event) {
        $('.header__reminder,main').toggleClass('active');
    });
    $('.hide').click(function(event) {
        $('.side-bar').toggleClass('height');
    });

    $('.banner__close, .banner__button').click(function(event) {
        $('.banner').toggleClass('active');
    });
    $('.nav-link').click(function(event) {
        $('.side-bar,.content').toggleClass('active');
    });



    $('#first-button').click(function(event) {
        $('#first-button,#first-subscribed,#first-subscribe').toggleClass('active');
    });
    $('#second-button').click(function(event) {
        $('#second-button,#second-subscribed,#second-subscribe').toggleClass('active');
    });
    $('#third-button').click(function(event) {
        $('#third-button,#third-subscribed,#third-subscribe').toggleClass('active');
    });
    
});