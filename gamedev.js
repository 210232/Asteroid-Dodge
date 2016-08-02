$(document).ready(function () {
  // Variable Declaration and Definition
  var main = $("#sprite1"),
      asteroid = $(".asteroid"),
      asteroid2 = $(".asteroid2"),
      score = 0;

  // Character Movement
  $(document).keydown(function (e) {
    // $(main).keydown; // NOTE: You mean $(main).keydown()? (Method Call)
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

  // Give each asteroid a random horizontal starting position
  $(asteroid).each(function () {
    var posx = Math.round(Math.random() * $(window).width())-20;
    $(this).css("left", posx + "px");
  });
  $(asteroid2).each(function () {
    var posx = Math.round(Math.random() * $(window).width())-20;
    $(this).css("left", posx + "px");
  });

  $("#again").hide(); // Hide "Try Again" button
  $(asteroid2).hide(); // Hide 2nd round of asteroids
  $(asteroid).animate({ "top": "+=570px" }, 2000);

  // Collision Detection Algorithm
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
      if (collision($(main), $(this)) /* Do the following if the player collides with any of the asteroids in Round 1 */) { //another if statement. If #myCar DOES hit something, the following will happen:
        //if #myCar hits .othercar, then #results will say "TRUE"
        $("#sprite1").hide();
        $(".asteroid").hide();
        $("#exploreBody").css("background-image", "url(https://i.ytimg.com/vi/vJaAy3jmEx8/maxresdefault.jpg)")
        $("#again").show();
        $("#spawner").hide();
        $(asteroid2).hide();
        clearInterval(asteroidSpawner);
        clearInterval(asteroid2Spawner);
        //all the actions that happen during a collision go here
      }
    });
  });

  var asteroidSpawner = window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($(asteroid), function() {
      if (collision($("#spawner"), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
        //if #myCar hits .othercar, then #results will say "TRUE"
        $(asteroid).animate({"top": "-=570px"}, 0);
        $(asteroid).hide();
        $(asteroid2).show();
        $(asteroid2).animate({ "top": "+=570px" }, 2000);

        /* Addition: Try moving first round of asteroids to top and see what happens */
        /*
          $(asteroid).each(function () {
            $(this).css("top", "0px");
          });
          $(asteroid2).each(function () {
            $(this).css("top", "0px");
          });
        */
        /* End of Addition */

        score++;
        $("#scorebox").html("Your score is " + score);
      }
    });
  });

  var asteroid2Spawner = window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($(asteroid2), function() {
      if (collision($("#spawner"), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
        //if #myCar hits .othercar, then #results will say "TRUE"
        $(asteroid2).animate({"top": "-=570px"}, 0);
        $(asteroid2).hide();
        /* Addition - Show first wave of asteroids again (to make game endless) */
        $(asteroid).show();
        $(asteroid).animate({"top": "+=570px"}, 2000);
        /*
          $(asteroid).each(function () {
            $(this).css("top", "0px");
          });
          $(asteroid2).each(function () {
            $(this).css("top", "0px");
          });
        */
        /* End of Addition */
        score++;
        /* Addition - I think we have to show the updated score? */
        $("#scorebox").html("Your score is " + score);
        /* End of Addition */
      }
    });
  });

  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($(asteroid2), function() {
      if (collision($(main), $(this)) /* Do the following if the player collides with the 2nd round of asteroids */) { //another if statement. If #myCar DOES hit something, the following will happen:
        //if #myCar hits .othercar, then #results will say "TRUE"
        $("#sprite1").hide();
        $(".asteroid2").hide();
        $("#exploreBody").css("background-image", "url(https://i.ytimg.com/vi/vJaAy3jmEx8/maxresdefault.jpg)")
        $("#again").show();
        $("#spawner").hide();
        //all the actions that happen during a collision go here
        /* Addition - Trying to follow everything for collision event with .asteroid here */
        $(asteroid).hide();
        clearInterval(asteroidSpawner);
        clearInterval(asteroid2Spawner);
        /* End of Addition */
      }
    });
  });
});//game end
