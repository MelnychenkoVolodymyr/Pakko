/* Розтягує картинку на весь екран */


$('.header-menu__icon').click(function(event) {
	$(this).toggleClass('active');
	$('.header-menu').toggleClass('active');
	if($(this).hasClass('active')){
		$('body').data('scroll',$(window).scrollTop());
	}
		$('body').toggleClass('lock');
	if(!$(this).hasClass('active')){
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});

/* 
	? Для адаптивного хедера та меню бургеру 
 */

	$('.pense__row').slick({
		arrows: false,
		dots: false,
		infinite: true,
		variableWidth: true,
		mobileFirst: true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive:[
			{
				breakpoint: 767.98,
				settings: "unslick"
			},
			{
				breakpoint:479.98,
				settings: {
					slidesToScroll:3
				}
		}
]
	});
/* 
	? =========================================
 */