$('.owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  margin: 30,
  responsive:{
      768: {
          items:4
      },
      0:{
          items:1,
      }
  },
  navText: ['<i class="carousel__arrow carousel__arrow_prev fa fa-long-arrow-alt-left" aria-hidden="true"></i>', '<i class="carousel__arrow carousel__arrow_next fa fa-long-arrow-alt-right" aria-hidden="true"></i>']
})

$(document).ready(function() {
  $('.header__burger').click(function() {
      $('.menu').toggleClass('menu_active');
      $('.header__burger>svg').toggleClass('fa-times').toggleClass('fa-bars');
  });
});