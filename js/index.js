$(function() {
    $(".flexslider").flexslider({
    	directionNav:false,
    	animation:'slide',
    	slideshowSpeed:3000
    });
    $("#nav").on('click','li',function(){
    	$(this).siblings().removeClass('active');
    	$(this).addClass('active');
    })
});