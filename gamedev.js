$( document ).ready(function() {

var main = $("#sprite1");
var problem = $("#sprite2")

$(document).keydown(function(e) {
  $(main).keydown;
  switch(e.which) {
  
  //move left
  case 37:
    $(main).animate({left: "-=30px"}, 'fast');
    break;
 //move right
  case 39:
    $(main).animate({left: "+=30px"}, 'fast');
    break;
  };


});