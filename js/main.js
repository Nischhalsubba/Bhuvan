$('.owl-carousel').owlCarousel({
  loop:true,
  margin:0,
  responsiveClass:true,
  loop:true,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:true,
      }
  }
})


