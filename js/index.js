$(document).ready(function() {
	$('#makingBorad').fullpage({
    	scrollBar: true,
    	navigation: true,
    	// normalScrollElements: '#woodAll',
    	anchors: ['page1', 'page2', 'page3', 'page4'],
    	menu: '#nav',
    	scrollingSpeed: 2000

    });

	$(window).resize(function(){
        autoScrolling();
    });

    function autoScrolling(){
        var $ww = $(window).width();
        if($ww < 1024){
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
            skrollr.init();
            new WOW().init();
        }
    }

    autoScrolling();

  

});