function openNav() {
    document.getElementById("mySidenav").style.transform = "translateX(0)";
}

function closeNav() {
    document.getElementById("mySidenav").style.transform = "translateX(-100vw)";
};

setTimeout(function(){
    $('.loader').fadeOut();
},1000);

// window.addEventListener("load", function() {
// $('.loader').fadeOut();
// });
AOS.init();

$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: 'ease-in-out',
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });
  