// Инициализируем Swiper
let myImageSlider = new Swiper(".image-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",

    // Буллеты
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
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
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

  /*
	autoplay: {
		delay: 1000,
		stopOnLastSlide: false,
		disableOnInteraction: true
	},

	speed: 800,*/

  direction: "horizontal",
  effect: "slide",

  // Брейк поинты (адаптив)
  // Соотношение сторон
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
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

// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("timeCounter").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeCounter").innerHTML = "EXPIRED";
    }
}, 1000);
  


