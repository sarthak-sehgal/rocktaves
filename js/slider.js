$(document).ready(function(){
  $("#about").click(function() { 
    $("#slide1").fadeIn("slow");
    $("#slide0, #slide2, #slide3, #slide4").fadeOut("fast"); 
  });

  $("#rules").click(function() { 
    $("#slide2").fadeIn("slow");
    $("#slide0, #slide1, #slide3, #slide4").fadeOut("fast"); 
  });

  $("#contact").click(function() { 
    $("#slide3").fadeIn("slow");
    $("#slide0, #slide1, #slide2, #slide4").fadeOut("fast"); 
  });

  $("#description").click(function() { 
    $("#slide4").fadeIn("slow");
    $("#slide0, #slide1, #slide2, #slide3").fadeOut("fast"); 
  });
});