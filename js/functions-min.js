$(function () {
	var hScroll = $('.h-scroll'),
		hScrollContain = $('.h-scroll__container'),
		scrollPercent = 200;

	// 	firstTl = new TimelineMax({}),
	// 	fadeInFirst = $('.fade_in--first'),
	// 	fadeInSecond = $('.fade_in--second'),
	// 	fadeInThird = $('.fade_in--third'),
	// 	fadeInFourth = $('.fade_in--fourth');

	// firstTl.from(fadeInFirst, 1.3, {
	// 		delay: 1,
	// 		opacity: 0,
	// 		x: 500,
	// 		ease: Power1.easeInOut
	// 	})
	// 	.from(fadeInSecond, 1.3, {
	// 		delay: .2,
	// 		opacity: 0,
	// 		x: 300,
	// 		ease: Power1.easeInOut
	// 	})
	// 	.from(fadeInThird, 1.3, {
	// 		// delay: .1,
	// 		opacity: 0,
	// 		x: 300,
	// 		ease: Power1.easeInOut
	// 	}, '-=1')
	// 	.from(fadeInFourth, 1.3, {
	// 		opacity: 0,
	// 		x: 300,
	// 		ease: Power1.easeInOut
	// 	}, '-=1.2');


	function checkWidth() {
		var windowHeight = $(window).height(),
			calc = (scrollPercent * 100) + windowHeight;
		hScrollContain.css({
			height: calc
		});
	}
	checkWidth();
	$(window).resize(checkWidth);

	$(window).scroll(function () {
		var scroll = $(this).scrollTop();
		hScroll.css({
			transform: "translateX(-" + scroll / scrollPercent + "%)"
		});
	});
});