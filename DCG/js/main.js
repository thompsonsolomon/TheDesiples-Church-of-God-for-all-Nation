(function($) {

	'use strict';

	// bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

	
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

  // countdown
  // $("#date-countdown").countdown("2018/12/7", function(event) {
  //   $(this).text(
  //     event.strftime('%D <span class="label">days</span> %H <span class="label">hours</span> %M <span class="label">minutes</span> %S <span class="label">seconds</span>')
  //   );
  // });

  $('#date-countdown').countdown('2020/10/10', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
});

	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: false,
    items: 1,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});


  // home slider
  $('.testimony-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:false,
    autoplayHoverPause: false,
    items: 1,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:false
      }
    }
  });

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:3,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:false
      }
  	}
	});


	var contentWayPoint = function() {
		var i = 0;
		$('.element-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .element-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn element-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft element-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight element-animated');
							} else {
								el.addClass('fadeInUp element-animated');
							}
							el.removeClass('item-animate');
						},  k * 100);
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();
//   var il = document.getElementById('dis');
//   prompt('dis');
// //  document.getElementById
//  var ins = ( document.getElementById('ins'));
//    var ar = ('are you a member');
//      if(ins == onclick){
//        prompt('ar')
//      }
//     else if( ar == [123456789.]){
//       window.alert('Welcome you are one of us');
//      }
//      else {
//        window.blur('ins');
//      }
// window.alert('welcome to dcg');
// var name = prompt('Enter name')
// var pcode = prompt('passcode')
// if(
//     pcode == 'i am a member '){
//         pcode = prompt ('password pls');
//     }
// if (name == 'aremu'&&pcode == 'i am a member'){
//     window.alert('Welcome to dcg')
// } 
// else if( name == 'solo'){
//     window.alert('check your passcode');
//     pcode = prompt('pass code check')
// }
// else{
//     window.alert('illegal Entry');
//     window.confirm('pcode');
//     // ('you are not a member')
// }
// if(window.confirm('pcode')=== ''){
//   setTimeout(function() { 
//     if($('#loader').length > 1110) {
//       $('#loader').removeClass('show');
//     }
//   }, 100000);
// }
// window.alert('Welcome to Our Company');
// var name = prompt('Enter Name')
// var pcode = prompt('Enter your pass code')
// if(pcode === (' ') && name === ('solomon'))
//  {
//         pcode = prompt('Confirm password ');
//     }
//     if(name == 'Thompson Solomon'&& pcode == '123456789'){
//         window.alert(' Welcome')
//     }
//     else if(name === 'solomon'){
//         window.alert('Recover Pcode');
//         if ( pcode == '123456789') {
//             window.alert('password confirmed');
//         }else{
//             window.alert('retry')
//         }
//         pcode = prompt('Enter remembered password');
//     }
//     else{  
//         window.alert('retry')
//       }







})(jQuery);