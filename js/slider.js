$(document).ready(function(){
  $("#about").click(function() { 
    $("#slide1, #heading").fadeIn("slow");
    $("#slide0, #slide2, #slide3, #slide4").fadeOut("fast"); 
  });

  $("#rules").click(function() { 
    $("#slide2, #heading").fadeIn("slow");
    $("#slide0, #slide1, #slide3, #slide4").fadeOut("fast"); 
  });

  $("#contact").click(function() { 
    $("#slide3, #heading").fadeIn("slow");
    $("#slide0, #slide1, #slide2, #slide4").fadeOut("fast"); 
  });

  $("#description").click(function() { 
    $("#slide4, #heading").fadeIn("slow");
    $("#slide0, #slide1, #slide2, #slide3").fadeOut("fast"); 
  });
  $("#heading").click(function() { 
    $("#slide0").fadeIn("slow");
    $("#heading, #slide1, #slide2, #slide3, #slide4").fadeOut("fast"); 
  });
});