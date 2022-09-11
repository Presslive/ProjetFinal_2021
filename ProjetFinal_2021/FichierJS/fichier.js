$(document).ready(function() {

	$('.Header').load('../HTML/Header.html');
	$('.Footer').load('../HTML/Footer.html');
	$('.Inscription').load('../HTML/Inscription.html');

	$('.carousel').carousel({
		pause: "null"
	});

	$('#infoParis').hide();

	$('.text').mouseenter(function() {
		$(this).addClass('ajout')
	});
	$('.text1').mouseenter(function() {
		$(this).addClass('ajout')
	});

	$('.text').mouseleave(function() {
		$(this).removeClass('ajout')
	});
	$('.text1').mouseleave(function() {
		$(this).removeClass('ajout')
	});

	//Page3
	$(".avis-voyageurs").hide();

	var premierClick = 0;
	$(".boutton-p3").click(function() {
		if (premierClick == 0) {

			$(".carousel-p3-inner").hide();
			$(".avis-voyageurs").show();

			$(".section-p3").addClass("changementBordure");

			premierClick++;
		}
		//retourne a default
		else {
			$(".carousel-p3-inner").show();
			$(".avis-voyageurs").hide();
			$(".section-p3").removeClass("changementBordure");
			//supprime l element

			premierClick = 0;

		}
	});

	$(".avis-voyageurs").mouseenter(function() {
		$(this).addClass("changement-p3");

	});
	$(".avis-voyageurs").mouseleave(function() {
		$(this).removeClass("changement-p3");

	});

})