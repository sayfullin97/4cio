$(document).ready(function() {  
    $( 'a[href^="#"]' ).click(function(){ 
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $( "body,html" ).animate({
            scrollTop: top
        }, 1500
        );
    });  
    
    $(".accordion__header").on('click touch',function () {   
        $(this).parent().find('.accordion__info').slideToggle("slow");
        $(this).toggleClass('active');
    }); 
    $('.program__button').on('click touch',function (){
        $(this).hide();
        $('.program__hide').show();
    });

    $('button, .open-modal').click(function(event) {
        if ($(this).attr('data-modal-click')) {
            var modalId = $(this).attr('data-modal-click');
            event.preventDefault();
            $('.modal-bg').fadeIn();
            $('[data-modal="' + modalId + '"]').fadeIn().addClass('active'); 
        } 
    }); 
    $('.modal-bg').click(function() {
      $('.modal-bg').fadeOut();
      $('.modal').fadeOut().removeClass('active');
      $('.services__modal').fadeOut().removeClass('active');
    });
    $('.header__nav').click(function(){
      $('.modal-bg').fadeOut(); 
      $('.header__mob-menu').removeClass('active');
    });
    $('.header__mob-menu .header__button, .header__mob-menu .open-modal').click(function(){
      // $('.modal-bg').fadeOut(); 
      $('.header__mob-menu').removeClass('active');
    });
    $('.modal-paket__close').click(function() {
      $('.modal-bg').fadeOut();
      $('.modal').fadeOut().removeClass('active');
      $('.header__mob-menu').removeClass('active');
    }); 
    $('.header__hamburger').click(function() { 
      $('.modal-bg').fadeIn();
      $('.header__mob-menu').addClass('active');
    }); 

$('.select-paket').change(function(){
	var value = $(this).val();
  var value1 = '3 000 ₽';
  var value2 = '4 000 ₽';
  var value3 = '5 000 ₽';
  if(value == 'value1'){
    $('.form__price').html(value1);
  }; if(value == 'value2'){
    $('.form__price').html(value2);
  }; if(value == 'value3') {
    $('.form__price').html(value3);
  }
	
}); 

    $('.collegium__slider').slick({
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            //   infinite: true,
            //   dots: true
            }
          },
          {
            breakpoint: 1040,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 840,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 630,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          } 
        ]
      });
    $(".quotes__author").click(function() {
        $(".quotes__author").removeClass("active").eq($(this).index()).addClass("active");
        $(".quotes__content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".purchase__tabs-button").click(function() {
        $(".purchase__tabs-button").removeClass("active").eq($(this).index()).addClass("active");
        $(".purchase__wrapp").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    // $('.history').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      

    //   

    // });

    $('.history').slick({
      dots: true,
      infinite: false,
      arrows: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1, 
      swipe: false,
      // fade: true,
      asNavFor: '.history__year',
      responsive: [
        {
          breakpoint: 993,
            settings: {
              adaptiveHeight: true,
              dots: true,
            }
        }
       ]
    });
    $('.history__year').slick({
      dots: false,
      infinite: false,
      arrows: false,
      asNavFor: '.history',
      // speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1, 
      swipe: false,
      fade: true
    });

    $('.slick-arrow').on('click', function(){
      $('.slick-dots li.slick-active').prevAll().addClass('prev-item');
      $('.slick-dots li.slick-active').nextAll().removeClass('prev-item');
    });

    var $slider = $('.history');
    var $progressBar = $('.progress'); 
    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      
      $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
       
    });
   
});