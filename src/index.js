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
      breakpoint: 768,
      settings: {
       
        slidesToShow: 3,
      
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
      
        slidesToShow: 2,
          slidesToScroll: 3,
        dots: true,
      },
    },
    {
      breakpoint: 269,
      settings: 'unslick', // destroys slick
    },
  ],
});
