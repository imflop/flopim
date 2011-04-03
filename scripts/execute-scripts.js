/*

Javascript for App Portfolio
Created by Adrian Pelletier
http://www.designkindle.com

*/

// Begin jQuery
	
$(document).ready(function() {

	/* =Local Scroll
    -------------------------------------------------------------------------- */
    	
    	// Main Navigation
    	
    	$("#mainNav").localScroll();
    	
    	// "To the Top" links
    	
    	$(".toTheTop").localScroll();
    	

    /* =Social links
    -------------------------------------------------------------------------- */
	
		$(".social li").hover(function(){
			$(this).find("a").stop().animate({ marginTop: "-5px" }, 200);
		},function(){
			$(this).find("a").stop().animate({ marginTop: "0" }, 200);
		});
		
// End document ready
	
});
