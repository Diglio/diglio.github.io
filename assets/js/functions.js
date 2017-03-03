
//YouTube Image Scroll
$(window).scroll(function(){
  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position','center -'+ wScroll +'px');
});
//toggle .bubble visibility on click
$('.twitter-logo').click(function(){
  $('.twitter-bubble').toggleClass('make-visible');
});

$('.email-logo').click(function(){
  $('.email-bubble').toggleClass('make-visible');
});

$('.facebook-logo').click(function(){
  $('.facebook-bubble').toggleClass('make-visible');
});

$('.view-setup').click(function(){
  $('.pc-setup-bubble').toggleClass('make-visible');
  $('.pc-setup-list-bubble').toggleClass('make-visible');
});

$('.view-resume').click(function(){
  $('.resume-image-bubble').toggleClass('make-visible');
});
//Navigation Icon on active
$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass('active');
    $(this).addClass('active');
  });
});
//Image Popup Variables
var $overlayHeight = $("<div id= 'overlayHeight'></div>");
$('.home-wrap').append($overlayHeight);
var $image = $("<img>");
$overlayHeight.append($image);
var $close = $("<img id= 'closeImg'>");
$overlayHeight.append($close);
//Pops open Resume Image
$('.resume a').click(function(event){
  event.preventDefault();
  var $imageSource = '/assets/img/resume.png';
  $image.attr('src', $imageSource);
  $close.attr('src', "/assets/img/close.png");
  $overlayHeight.show();
});
//Pops open Battlestation Image
$('.battlestation a').click(function(event){
  event.preventDefault();
  var $imageSource = '/assets/img/setup.jpg';
  $image.attr('src', $imageSource);
  $close.attr('src', '/assets/img/close.png');
  $overlayHeight.show();
});
//Click "X" to close Popup Image
$($close).click(function(){
  $overlayHeight.hide();
  $('.resume-image-bubble').removeClass('make-visible');
  $('.pc-setup-bubble').removeClass('make-visible');
  $('.pc-setup-list-bubble').removeClass('make-visible');
  $('.twitter-bubble').removeClass('make-visible');
  $('.email-bubble').removeClass('make-visible');
  $('.facebook-bubble').removeClass('make-visible');
});
