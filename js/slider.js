$(document).ready(function(){ 
	$('.s1').click(function(){    
	    $('#slide2, #slide3, #slide4').fadeOut(350, function(){
	        $('#slide1').fadeIn(350);
	    });
	});
	$('.s2').click(function(){    
	    $('#slide1, #slide3, #slide4').fadeOut(350, function(){
	        $('#slide2').fadeIn(350);
	    });
	});
	$('.s3').click(function(){    
	    $('#slide1, #slide2, #slide4').fadeOut(350, function(){
	        $('#slide3').fadeIn(350);
	    });
	});
	$('.s4').click(function(){    
	    $('#slide1, #slide2, #slide3').fadeOut(350, function(){
	        $('#slide4').fadeIn(350);
	    });
	});
});