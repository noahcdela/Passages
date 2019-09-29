$(function () {
	let hScroll = $('.h-scroll'),
		hScrollContain = $('.h-scroll__container'),
		scrollPercent = 200,
		titleArrow = $('.title_arrow'),
		titleLetter = $('.title_letter');

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

	TweenMax.staggerFrom(titleArrow, 2, {drawSVG:0}, 0.1);
	TweenMax.staggerFrom(titleLetter, 2, {
		x: 50,
		opacity: 0,
		ease: Power1.easeInOut
	}, .2);

});