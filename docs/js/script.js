/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */
(function ($) {
	'use strict';

	$(window).scroll(function () {
		if ($('.navigation').offset().top > 100) {
			$('.navigation').addClass('fixed-nav');
		} else {
			$('.navigation').removeClass('fixed-nav');
		}
	});


	$('.portfolio-gallery').each(function () {
		$(this).find('.popup-gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	});


	$('#contact-form').validate({
		rules: {
			user_name: {
				required: true,
				minlength: 4
			},
			user_email: {
				required: true,
				email: true
			},
			// user_subject: {
			// 	required: false
			// },
			user_message: {
				required: true
			}
		},
		messages: {
			user_name: {
				required: 'Come on, you have a name don\'t you?',
				minlength: 'Your name must consist of at least 2 characters'
			},
			user_email: {
				required: 'Please put your email address'
			},
			user_message: {
				required: 'Put some messages here?',
				minlength: 'Your name must consist of at least 2 characters'
			}

		},
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				type: 'POST',
				data: $(form).serialize(),
				url: 'sendmail.php',
				success: function () {
					$('#contact-form #success').fadeIn();
				},
				error: function () {

					$('#contact-form #error').fadeIn();
				}
			});
		}
	});



	$('.testimonial-slider').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true
	});




	// Init Magnific Popup
	$('.portfolio-popup').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		},
		mainClass: 'mfp-with-zoom',
		navigateByImgClick: true,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function (openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}
	});

})(jQuery);



import { CountUp } from "https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.8/countUp.min.js";

// https://github.com/stutrek/scrollMonitor
// import { scrollMonitor } from 'scrollmonitor'

// https://github.com/inorganik/CountUp.js
// import { CountUp } from 'countup.js'

const requireCounter = document.querySelectorAll(".countup");
requireCounter.forEach((el) => {
  const elementWatcher = scrollMonitor.create(el);
  elementWatcher.fullyEnterViewport(function () {
    // if (!el.dataset.counter_done) { // Uncomment this to stop the counter after first run
      let numberOfDecimals = 0;
      let countTo = parseFloat(el.dataset.to);
      if (countTo % 1 > 0) {
        numberOfDecimals = countTo.toString().split(".")[1].length;
      }
      const countUp = new CountUp(el, countTo, {
        decimalPlaces: numberOfDecimals
      });
      countUp.start();
      el.dataset.counter_done = true;
    // } // Uncomment this to stop the counter after first run
  });
});


var cards3D = document.getElementsByClassName("3dhover");
window.onload = function(){
  for(let i=0; i<cards3D.length;i++){
    cards3D[i].addEventListener('mousemove',e=>{
      let currCard = e.currentTarget;
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let degrees = 20;
      let ry = 2*(mouseX- (currCard.getBoundingClientRect().left+(currCard.offsetWidth/2)))/(currCard.offsetWidth);
       let rx = 2*(currCard.getBoundingClientRect().top+(currCard.offsetHeight/2)-mouseY)/(currCard.offsetHeight);
      currCard.style.transform = "rotate3d("+rx+","+ry+",0,"+degrees+"deg) scale(1.1)";
      currCard.style.boxShadow = 3*-ry+"px "+3*rx+"px 5px 3px rgba(0,0,0,0.4)";
      currCard.getElementsByClassName("card-number")[0].style.textShadow = 4*-ry+"px "+3*rx+"px 3px rgba(0,0,0,0.8)";
    });
    
    cards3D[i].addEventListener('mouseout',e=>{
      let currCard = e.currentTarget;
      // console.log(currCard);
      currCard.style.transform = "";
      currCard.style.boxShadow = "none";
      currCard.getElementsByClassName("card-number")[0].style.textShadow = "0px 0px 4px rgba(0,0,0,0.8)";
    });
  }
}

// document.addEventListener("DOMContentLoaded", function () {
// 	// Target the list items
// 	const listItems = document.querySelectorAll('.navbar-nav .nav-item');

// 	// Use GSAP to create a fade-in animation for each list item
// 	gsap.from(listItems, {
// 	  opacity: 0,
// 	  y: 20,
// 	  stagger: 0.2, // Stagger the animations for a nice effect
// 	  duration: 1, // Animation duration in seconds
// 	  ease: "power2.out", // Easing function
// 	});
//   });
// document.addEventListener("DOMContentLoaded", function () {
// 	gsap.from(".menu-items li a", { opacity: 0, y: 20, duration: 2, stagger: 0.5,delay:0.9, ease: "power2.out" });
//   });
document.addEventListener("DOMContentLoaded", function () {
    // Select the navigation items
    const navItems = document.querySelectorAll('.navbar-nav li a');

    // GSAP animation for the navigation items
    gsap.from(navItems, {
      duration: 1,
      opacity: 0,
      y: 30,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Additional animation for the "Get in touch with us" button
    const touchButton = document.querySelector('.non');

    gsap.from(touchButton, {
      duration: 1,
      opacity: 0,
      x: 30,
      ease: "power2.out",
    });
	console.log("Animation applied successfully");
  });