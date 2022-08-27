$('.slider').slick({
  // normal options...
    infinite: false,
    dots: true,
    arrows:false,

  // the magic
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 3,
        dots: true,
      },
    },
    {
      breakpoint: 300,
      settings: 'unslick', // destroys slick
    },
  ],
});
