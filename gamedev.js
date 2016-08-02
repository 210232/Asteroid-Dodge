$(document).ready(function () {
  var main = $("#sprite1"), asteroid = $(".asteroid"), asteroid2 = $(".asteroid2"), score = 0;

  $(document).keydown(function (e) {
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
  });//function(e) end

  $(asteroid).each(function(i){
    var posx = Math.round(Math.random() * $(window).width())-20;
    $(this).css("left", posx + "px");
  });
  $(asteroid2).each(function(i){
    var posx = Math.round(Math.random() * $(window).width())-20;
    $(this).css("left", posx + "px");
  });

  $("#again").hide();
  $(asteroid2).hide();
  $(asteroid).animate({ "top": "+=570px" }, 2000);

  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    //below is an if statement - if the variables calculate to the right formula, it will return true or false
    
    // Original
    /*
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
    */
    // Refactored
    return !(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2);
  }

  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($(asteroid), function() {
      if (collision($(main), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
        //if #myCar hits .othercar, then #results will say "TRUE"
        $("#sprite1").hide();
        $(".asteroid").hide();
        $("#exploreBody").css("background-image", "url(https://i.ytimg.com/vi/vJaAy3jmEx8/maxresdefault.jpg)")
        $("#again").show();
        $("#spawner").hide();
        $(asteroid2).hide();
        $("#score").hide();
        //all the actions that happen during a collision go here
      }
    });
  });
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    //below is an if statement - if the variables calculate to the right formula, it will return true or false
    
    // Original
    /*
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
    */
    // Refactored
    return !(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2);
  }

  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($(asteroid), function() {
      if (collision($("#spawner"), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
        //if #myCar hits .othercar, then #results will say "TRUE"
        $(asteroid).hide();
        $(asteroid2).show();
        $(asteroid2).animate({ "top": "+=570px" }, 2000);
        var score = score + 1;
        $("#scorebox").html("Your score is" + score);
      }
    });
  });
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    //below is an if statement - if the variables calculate to the right formula, it will return true or false
    
    // Original
    /*
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
    */
    // Refactored
    return !(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2);
  }

  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($(asteroid2), function() {
      if (collision($("#spawner"), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
        //if #myCar hits .othercar, then #results will say "TRUE"
        $(asteroid2).hide();
        var score = score + 1;
      }
    });
  });

  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($(asteroid2), function() {
      if (collision($(main), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
        //if #myCar hits .othercar, then #results will say "TRUE"
        $("#sprite1").hide();
        $(".asteroid2").hide();
        $("#exploreBody").css("background-image", "url(https://i.ytimg.com/vi/vJaAy3jmEx8/maxresdefault.jpg)")
        $("#again").show();
        $("#spawner").hide();
        //all the actions that happen during a collision go here
      }
    });
  });
});//game end
