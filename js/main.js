$(document).ready(function() {

	//Back to Top--
	$('#topLink').on('click', function (e) {
	e.preventDefault();
	$('html,body').animate({
	    scrollTop: 0
	}, 700);
	});// Back to Top

	// Postepeni Scroll----
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
	if (
	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	&& 
	location.hostname == this.hostname
	) {
	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	if (target.length) {
	event.preventDefault();
	$('html, body').animate({
	  scrollTop: target.offset().top
	}, 1000);

	}
	}
	});// End Postepeni Scroll



	//Project slider
	$('.right').on('click',function() {
	var currentSlide = $('.active-project.active');
	var nextSlide = currentSlide.next();

	currentSlide.fadeOut(400).removeClass('active');
	nextSlide.fadeIn(400).addClass('active');

	if(nextSlide.length == 0){
	$('.active-project').first().fadeIn(400).addClass('active');
	}	

	});

	$('.left').on('click',function() {
	var currentSlide = $('.active-project.active');
	var nextSlide = currentSlide.prev();

	currentSlide.fadeOut(400).removeClass('active');
	nextSlide.fadeIn(400).addClass('active');

	if(nextSlide.length == 0){
	$('.active-project').last().fadeIn(400).addClass('active');
	}	

	}); // END project slider      
	        	



	         	  
	//WHO WE ARE SLIDER
	var vrednost = 0;
	var clicks = 0;
	var visible = 6;
	var lengthPrson = $('.person').length;
	var margina = 163;
	$('.left1').click(function(){
	clicks--;
	console.log(clicks);
	if(clicks<=0){
	clicks = lengthPrson-visible;
	vrednost = -(clicks * margina);
	}
	vrednost = vrednost +margina;
	$('.people').animate({ marginLeft: vrednost+"px"}, 800 );
	});

	$('.right1').click(function(){
	clicks++;
	if(clicks>lengthPrson-visible){
	clicks = 1;
	vrednost = clicks * margina;
	}
	vrednost = vrednost -margina;
	$('.people').animate({ marginLeft : vrednost+"px"}, 800 );
	});
	//End who we are slider


	//our client
	var vrednost1 = 0;
        var klik = 0;
        var vidljivost = 4;
        var lengthArticleoc = $('.logo-clients').length;
        var marginac = 244;
        $('.left2').click(function(){
          if($(window).width() < 1200){
            marginac = 190;
          }
          if ($(window).width() < 768) {
            marginac = 235;
          }
        klik--;
        if(klik<=0){
          klik = lengthArticleoc-vidljivost;
          vrednost1 = -(klik * marginac);
        }
          vrednost1 = vrednost1 +marginac;
          $('.all-clients').animate({ marginLeft: vrednost1+"px"}, 1000 );
        });
        $('.right2').click(function(){
          if($(window).width() < 1200 ){
            marginac = 190;
          }
          if ($(window).width() < 768) {
            marginac = 235;
          }
          klik++;
          if(klik>lengthArticleoc-vidljivost){
            klik = 1;
            vrednost1 = klik * marginac;
          }
            vrednost1 = vrednost1 -marginac;
          $('.all-clients').animate({ marginLeft : vrednost1+"px"}, 1000 );
        });

	//Slider

	$('.head-slider .carousel-item').hide();
      var currentSlide = $('.head-slider .carousel-item:first').show();
      $('.head-slider .prev').on('click', function(){
        var prevSlide =   currentSlide.prev();
        if(prevSlide.length == 0){
          prevSlide = $('.head-slider .carousel-item:last-of-type');
        }
        currentSlide.hide(700);
        prevSlide.show(700);
        currentSlide = prevSlide;
      })
      $('.head-slider .next').on('click', function(){
        var nextSlide = currentSlide.next();
        if(nextSlide.length == 0){
          nextSlide = $('.head-slider .carousel-item:first');
        }
        currentSlide.hide(700);
        nextSlide.show(700);
        currentSlide = nextSlide;
      })     
});