jQuery(function ($) {
	"use strict";

	/* ========================================================================= */
	/*	Page Preloader
	/*  Use the callback to run anything that needs to wait until load.
	/* ========================================================================= */

	$(window).on('load', function () {
		$('.preloader').fadeOut(100, setupShuffle);
		populateSubjectLine();
	});

	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});
	/* ========================================================================= */
	/*	Portfolio Filtering Hook.
	/*  Don't let this run until the page has loaded...
	/* =========================================================================  */

	function setupShuffle() {
		var containerEl = document.querySelector('.shuffle-wrapper');
		if (containerEl) {
			var Shuffle = window.Shuffle;
			var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
				group: 'featured',
				itemSelector: '.shuffle-item',
				buffer: 1
			});

			jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
				var input = evt.currentTarget;
				if (input.checked) {
					myShuffle.filter(input.value);
				}
			});
		}
	}
	/* ========================================================================= */
	/*	All Carousels
	/* =========================================================================  */

	$(".carousel").slick({
		arrows: true,
		infinite: false,
		autoplay: false,
		variableWidth: true,
		swipeToSlide: true,
		touchMove: true,
		lazyload: 'progressive',
	});

	/* ========================================================================= */
	/*	Animated section
	/* ========================================================================= */

	var wow = new WOW({
		offset: 100, // distance to the element when triggering the animation (default is 0)
		mobile: false // trigger animations on mobile devices (default is true)
	});

	var scrolled = false;
	$(window).on('scroll', function () {
		if (!scrolled) {
			scrolled = true;
			wow.init();
		}
	})


	/* ========================================================================= */
	/*	animation scroll js
	/* ========================================================================= */

	var html_body = $('html, body');
	$('nav a, .page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 70
				}, 1500, 'easeInOutExpo');
				return false;
			}
		}
	});

	/* ========================================================================= */
	/*	Populate the "Subject" line of contact form if it exists
	/*  and if the query string tells us to do so
	/* ========================================================================= */

	function populateSubjectLine() {
		const subjectInput = $("form #subject");
		
		if (subjectInput.length) {
			const urlParams = new URLSearchParams(window.location.search);
			const subjectParam = urlParams.get('subject');
			if (subjectParam)
				subjectInput.val(subjectParam);
		}
	}
	

	// easeInOutExpo Declaration
	jQuery.extend(jQuery.easing, {
		easeInOutExpo: function (x, t, b, c, d) {
			if (t === 0) {
				return b;
			}
			if (t === d) {
				return b + c;
			}
			if ((t /= d / 2) < 1) {
				return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			}
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	});
});