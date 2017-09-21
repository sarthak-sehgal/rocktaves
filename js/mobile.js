$(document).ready(function(){

    $('#mb-btn-about').on('click',function(){
        document.getElementById('mb-content-about').style.top="0vh";
    })

    $('#mb-btn-rules').on('click',function(){
        document.getElementById('mb-content-rules').style.top="0vh";
    })

    $('#mb-btn-contact').on('click',function(){
        document.getElementById('mb-content-contact').style.top="0vh";
    })

    $('#mb-btn-description').on('click',function(){
        document.getElementById('mb-content-description').style.top="0vh";
    })

    $('#mb-close-about').on('click', function(){
        document.getElementById('mb-content-about').style.top="-100vh";
    })

    $('#mb-close-rules').on('click', function(){
        document.getElementById('mb-content-rules').style.top="-100vh";
    })

    $('#mb-close-contact').on('click', function(){
        document.getElementById('mb-content-contact').style.top="-100vh";
    })

    $('#mb-close-description').on('click', function(){
        document.getElementById('mb-content-description').style.top="-100vh";
    })

    

})

