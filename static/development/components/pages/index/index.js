import './index.scss';



var slickFinder1 = $('.bike_trailer__block').length;
  if (slickFinder1 >= 1) {

    $('.bike_trailer__block').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        arrows: true,
        prevArrow: '<div class="slick-first"><</div>',
        nextArrow: '<div class="slick-second">></div>',
        lazyLoad: "ondemand",
    });

    $('.slick-first').click(function () {
        $(".bike_trailer__block").slick('slickPrev');
      });
      $('.slick-second').click(function () {
        $(".bike_trailer__block").slick('slickNext');
      });
  }