
var handleMatchMedia = function(mediaQuery) {
	if (mediaQuery.matches) {
		$('.loader__enter').text('Кликните на экран');
		$('.loader').click(function(){
			$('.loader').addClass('inactive'); 
			$('.content__title').addClass('active'); 
		});
		$('.content').click(function(){
			$('.content__main-adaptive').addClass('active'); 
		});
		$('.content__main-adaptive').click(function(){
			$('.content__main-adaptive').addClass('inactive'); 
		});
		 
	} else {
		$('.loader__enter').text('Нажмите на Enter');
		$(document).keypress(function(e) { 
			if(e.which == 13) 
			{ 
				$('.loader').addClass('inactive'); 
				$('.content__title, .content__body_anim').addClass('active'); 
		} 
		}); 
	}
},
mql = window.matchMedia('(max-width: 769px)');
handleMatchMedia(mql);
mql.addListener(handleMatchMedia); 


$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});