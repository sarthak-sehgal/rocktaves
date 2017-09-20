$('#next').click(function(){ 
	$('#slider').css({
		'left':'-=100%'
	});
	var element = document.getElementById('slider'),
    style = window.getComputedStyle(element),
    left = style.getPropertyValue('left');
    if(left=='-500px')
    {
    	$('#prev').css({
    		'display': 'block'
		});
    }
    if(left=='-2000px')
    {
    	$('#next').css({
    		'display': 'none'
    	});
    }
});
$('#prev').click(function(){
	$('#slider').css({
		'left':'+=100%'
	});
	var element = document.getElementById('slider'),
    style = window.getComputedStyle(element),
    left = style.getPropertyValue('left');
    console.log(left);
    if(left=='0px')
    {
    	$('#prev').css({
    		'display': 'none'
    	});
    }
});