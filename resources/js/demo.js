$(document).ready(function () {

  /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    $('.btn-to-plan').click(function () {
       $('html, body').animate({scrollTop: $('.js-scroll-plan').offset().top}, 1000); 
    });
    
    $('.btn-to-features').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    
    /* Navigation scroll --currently not working*/
    $(function () {
      $('a[href*=#]:not([href=#])').click(function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          console.log('hi');    
          var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html,body').animate({
                      scrollTop: target.offset().top
                  }, 1000);
                  return false;
              }
          }
      });
  });

  /* Animate */

  $('.js--anim-1').waypoint(function(direction){
        $('.js--anim-1').addClass('animated fadeIn');
  },{
      offset: '50%'
  });

  $('.js--anim-2').waypoint(function(direction) {
    $('.js--anim-2').addClass('animated fadeIn');
}, {
    offset: '50%'
});

$('.js--anim-3').waypoint(function(direction) {
    $('.js--anim-3').addClass('animated pulse');
}, {
    offset: '50%'
});

/* Mobile Navigation */
$('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon = $('ion-icon').prop('name');
    nav.slideToggle(200);

    if(icon=='menu'){
        $('ion-icon').removeAttr('name');
        $('ion-icon').attr('name','close');
    }else{
        $('ion-icon').removeAttr('name');
        $('ion-icon').attr('name','menu');
    }
});

/* Map */
new GMaps({
    div: '.map',
    lat: -12.043333,
    lng: -77.028333
  });
    
});

