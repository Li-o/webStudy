$(document).ready(function () {
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 60){
            $("#topbtn").fadeIn();
        } else{
            $("#topbtn").fadeOut();
        }
    });

    $("#topbtn").click(function (e) { 
        e.preventDefault();
        $("html,body").animate({scrollTop : 0},800);
    }); 
});