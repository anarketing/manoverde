$(document).ready(function(){
	
	// animacion home
	$(window).scroll(function() {
	    var height = $(window).scrollTop();
	    //console.log(height);	    
	    if(height > 400) {
	        $('.mv12').addClass('transparencia');	        
	    }
	    if(height > 500) {
	        $('.mv11').addClass('transparencia');	        
	    }
	    if(height > 600) {
	        $('.mv10').addClass('transparencia');	        
	    }
	    if(height > 700) {
	        $('.mv09').addClass('transparencia');	        
	    }
	    if(height > 800) {
	        $('.mv08').addClass('transparencia');	        
	    }
	    if(height > 900) {
	        $('.mv07').addClass('transparencia');	        
	    }
	    if(height > 1050) {
	        $('.iso, nav').addClass('transparencia');	        
	        $('.logo, .bajar').css('opacity','0');
	    }	    

	    if(height <=400){
	    	//$('.escala').removeClass('escala');
	    	$('.transparencia').removeClass('transparencia');	    	
	    }
	    if(height <=1050){	    	
	    	$('.logo,.bajar').css('opacity','1');
	    }
	});	


	//TOPLINK
	  jQuery("a.toplink").click(function() {
	    jQuery("html, body").animate({
	      scrollTop: jQuery(jQuery(this).attr("href")).offset().top + "px"
	    }, {
	      duration: 1000,
	      easing: "swing"
	    });
	    return false;
	});

	  
})