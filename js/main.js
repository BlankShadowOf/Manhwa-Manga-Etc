$(document).ready(function() {
	/* MENU RESPONSIBE */
	$('.barra-menu-span').on('click',function(){
		$('.barra-menu-ul').slideToggle();
	});
	
	/* ANIMACION DE SCROLL */
	jQuery('.scroll-fotos').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: $(".contenedor-fotos").offset().top}, 600);
		return false;
	});
	jQuery('.scroll-video').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: $(".contenedor-videos").offset().top}, 600);
		return false;
	});
	jQuery('.scroll-body').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: $(".contenedor-general").offset().top}, 600);
		return false;
	});
});