/*global $, alert, console*/

$(function() {

	'use strict';

	//trigger nice scroll

	$("body").niceScroll({
		cursorwidth:'10px',
		cursorborder:'2px solid #fff'
	});
    

    //trigger change height
$('.header').height($(window).height());

    $(window).resize(function() {
        $(".header").height($(window).height())

    });
   
	//scroll to 

	$('.header .arrow i').click(function() {

		$('html, body').animate({

		scrollTop: $('.features').offset().top 
		},1000);

	});

	$('.hirebutton').click(function() {

		$('html, body').animate({

		scrollTop: $('.contact').offset().top 
		},1000);

	});

	$('.ourbutton').click(function() {

		$('html, body').animate({

		scrollTop: $('.ourwork').offset().top 
		},1000);

	});


    

// show hidden items 

  $('.showmore').on("click" ,function() {
  	$('.hidden').fadeToggle( function() {

  		if ($('.hidden').is(':visible')) {
			$('.showmore').text('Hide More');
		} else {
			$('.showmore').text('Show More');

		}

  	});
  	

  });
    

//testim next prev

 var left= $('.testim .fa-chevron-left'),
     right= $('.testim .fa-chevron-right');

function arrowff() {
	$('.client:first').hasClass('active') ? left.fadeOut() : left.fadeIn();
	$('.client:last').hasClass('active') ? right.fadeOut() : right.fadeIn();
}
arrowff();




$('.testim i').on("click", function () {
	if ($(this).hasClass('fa-chevron-right')) {
		$('.testim .active').fadeOut(1000, function () {
			$(this).removeClass('active').next('.client').addClass('active').fadeIn();
			arrowff();
		});
	} else {
		$('.testim .active').fadeOut(1000, function () {
			$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
			arrowff();
		});
	}
});

  });  

