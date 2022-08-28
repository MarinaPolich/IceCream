$('.slider').slick({
  // normal options...
    infinite: false,
    dots: true,
    arrows:false,
    slidesToShow: 1,
responsive: [
    {
      breakpoint: 481,
      settings: {
            slidesToScroll: 2,
               
      },
    },],

});
