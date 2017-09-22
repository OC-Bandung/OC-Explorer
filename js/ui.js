$(".mdc-tab").click(function() {
 
	$(this).parent().find('a.mdc-tab').removeClass("mdc-tab--active");
	$(this).addClass("mdc-tab--active");

});

$("#add-to-csv").click(function() {
 
	$(this).html('<i class="material-icons">playlist_add_check</i>');
	$(this).removeClass('active');
	$(this).addClass('added');
	$("#add-to-csv-text").text ("contract was added");
	$("#add-to-csv-text").css("color" , "darkgray");
	var cnt = $(".checkout").attr("data-count"); 
	cnt = parseInt(cnt);
	$(".checkout").attr("data-count" , cnt + 1);
	
});



(function() {
				[].slice.call( document.querySelectorAll( '.checkout' ) ).forEach( function( el ) {
					var openCtrl = el.querySelector( '.checkout__button' ),
						closeCtrls = el.querySelectorAll( '.checkout__cancel' );

					openCtrl.addEventListener( 'click', function(ev) {
						ev.preventDefault();
						classie.add( el, 'checkout--active' );
					} );

					[].slice.call( closeCtrls ).forEach( function( ctrl ) {
						ctrl.addEventListener( 'click', function() {
							classie.remove( el, 'checkout--active' );
						} );
					} );
				} );
			})();


// $( document ).ready(function() {

// $( "#chart-tender.bar-chart ul li" ).each(function( index ) {
  	
//   	$(this).css("height", $( this ).attr("data") );
// });


	 
// });



// 			$(window).scroll(function(e){ 
//   var $el = $('.fixedElement'); 
//   var isPositionFixed = ($el.css('position') == 'fixed');
//   if ($(this).scrollTop() > 100 && !isPositionFixed){ 
//     $('.fixedElement').css({'position': 'fixed', 'top': '0px'}); 
//  	$('.fixedElement').css('background-color', '#eff9e6');
//   }
//   if ($(this).scrollTop() < 100 && isPositionFixed)
//   {
//     $('.fixedElement').css({'position': 'static', 'top': '0px'}); 
//     $('.fixedElement').css('background-color', 'transparent');
//   } 
// });
			

 