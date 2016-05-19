$( document ).ready(function() {

var main = $("#sprite1");

$(document).keydown(function(e) {
  $(main).keydown;
  switch(e.which) {
  
  //move left
  case 37:
    $(main).animate({left: "-=40px"}, 'fast');
    break;
 //move right
  case 39:
    $(main).animate({left: "+=40px"}, 'fast');
    break;
  };
});
});