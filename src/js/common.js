// Инициализируем Swiper
let myImageSlider = new Swiper(".image-slider", {

  pagination: {
    el: ".swiper-pagination",

    type: "bullets",
    clickable: true,
  },
  simulateTouch: false,
  touchRatio: 1,

  touchAngle: 45,
  grabCursor: false,
  slideToClickedSlide: false,

  hashNavigation: {
    watchState: true,
  },

  keyboard: {
    enabled: false,
    onlyInViewport: true,
    pageUpDown: true,
  },

  autoHeight: false,
  slidesPerView: 3,
  watchOverflow: true,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: false,
  initialSlide: 0,
  slidesPerColumn: 1,
  loop: true,
  loopedSlides: 0,
  freeMode: true,
  direction: "horizontal",
  effect: "slide",

  // Брейк поинты (адаптив)
  // Соотношение сторон
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 2,
      mousewheel: {
        sensitivity: 1,
      },
    },
    1024: {
      slidesPerView: 3,
    },
  },

  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  zoom: {
    maxRatio: 5,
    minRatio: 1,
  },
});


var countDownDate = new Date("Sep 5, 2022 15:37:25").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("timeCounter").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeCounter").innerHTML = "EXPIRED";
    }
}, 1000);


$('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});
