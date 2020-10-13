$(document).ready(function () {
  $(".comman-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
        fade: true,
        cssEase: "linear",
      },
    ],
  });
});
