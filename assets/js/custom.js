$(document).ready(function(){

	// WOW JS
	new WOW().init();

	// Page Loader
	$(".page-loader").delay(2000).fadeOut("2000");
	// jQuery('body').load(function($){
	//   alert("sdfsdf")
		
	// });

	// Flip Card
	$('.sa-flip-card .flip-box').click(function () {
		$(this).toggleClass('do-flip')
	})


    // scroll function for header background on scroll //
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 0) {
			$("body").addClass("scrolled");
		} else {
			$("body").removeClass("scrolled");
		}
	});

	// Hamburger
	$(".hamburger").click(function(){
		$("body").toggleClass("menu-btn-clicked");
	});

	// Case Study Progressbar
	function progressBarScroll() {
		let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
			height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
			scrolled = (winScroll / height) * 100;
		document.getElementById("progressBar").style.width = scrolled + "%";
	}

	window.onscroll = function () {
		progressBarScroll();
	};

	// Case Study Toggle
	$('.sa-toggle-section .sa-toggle-section-header .form-switch').click(function () {
		$(this).parent(".inner2").parent('.sa-toggle-section-header').parent('.sa-toggle-section').toggleClass('toggle-btn-clicked')
	})

	//  Case Study Counter
	// var a = 0;
	// $(window).scroll(function () {
	// 	var oTop = $("#counter-box").offset().top - window.innerHeight;
	// 	if (a == 0 && $(window).scrollTop() > oTop) {
	// 		$(".counter").each(function () {
	// 			var $this = $(this),
	// 				countTo = $this.attr("data-number");
	// 			$({
	// 				countNum: $this.text()
	// 			}).animate(
	// 				{
	// 					countNum: countTo
	// 				},

	// 				{
	// 					duration: 850,
	// 					easing: "swing",
	// 					step: function () {
	// 						//$this.text(Math.ceil(this.countNum));
	// 						$this.text(
	// 							Math.ceil(this.countNum).toLocaleString("en")
	// 						);
	// 					},
	// 					complete: function () {
	// 						$this.text(
	// 							Math.ceil(this.countNum).toLocaleString("en")
	// 						);
	// 						//alert('finished');
	// 					}
	// 				}
	// 			);
	// 		});
	// 		a = 1;
	// 	}
	// });


	// Case Studies Slider
	$('.case-studies-slider').slick({
		centerMode: true,
		slidesToShow: 3,
		arrows: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		// centerPadding: '40px',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

});