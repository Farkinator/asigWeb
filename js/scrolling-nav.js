//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    // var pos=$('.navbar').offset();
    // $('section').each(function(){
    //     if(pos.top >= $(this).offset().top-50 && pos.top <= $(this).next().offset().top)
    //     {
    //         $('.navbar').css('border-color', $(this).css('background-color')); //or any other way you want to get the date
    //         return; //break the loop
    //     }
    // });
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('ui-sref')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



// $(window).on("scroll resize", function(){

// });

// $(document).ready(function(){
//   $(window).trigger('scroll'); // init the value
// });
