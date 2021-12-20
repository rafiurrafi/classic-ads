import $ from "jquery";
$(".feature-slider").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: true,
  fade: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<i className="fas fa-long-arrow-alt-right dandik"></i>',
  nextArrow: '<i className="fas fa-long-arrow-alt-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
