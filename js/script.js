$(function() {
	var corouselList = $('#carousel'),
	interval = setInterval(changeSlide, 3000);
	function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}
	function moveFirstSlide() {
		var firstElement = $('ul').find('li').first();
		var lastElement = $('ul').find('li').last();
		lastElement.after(firstElement);
		carouselList.css({marginLeft:0});
	}
});



