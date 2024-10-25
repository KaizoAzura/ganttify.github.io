let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const previewImage = document.querySelector(".hero-img");
  const previewImageOffsetTop = previewImage.offsetTop;

  if (window.innerWidth >= 992) {
    if (scrollPosition > lastScrollTop) {
      if (scrollPosition >= previewImageOffsetTop) {
        previewImage.style.width = "100%";
      }
    } else {
      if (scrollPosition < previewImageOffsetTop) {
        previewImage.style.width = "80%";
      }
    }
  }

  lastScrollTop = scrollPosition;
});

// float icon

const floatIcons = document.querySelectorAll(".float-icon");
const heroSection = document.querySelector(".hero");

function randomPosition(icon) {
  const areaWidth = heroSection.clientWidth - 50;
  const areaHeight = heroSection.clientHeight - 50;

  const randomX = Math.random() * areaWidth;
  const randomY = Math.random() * areaHeight;

  icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

floatIcons.forEach((icon) => {
  setInterval(() => randomPosition(icon), 1000);
});

// slick slider ---------------------
$(document).ready(function () {
  function initializeSlider() {
    if ($(window).width() <= 992) {
      if (!$(".sponsor-slider").hasClass("slick-initialized")) {
        $(".sponsor-slider").slick({
          dots: false,
          infinite: true,
          speed: 300,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: $(window).width() < 768 ? 1 : 2,
          slidesToScroll: 1,
          arrows: false,
        });
      }
    } else {
      if ($(".sponsor-slider").hasClass("slick-initialized")) {
        $(".sponsor-slider").slick("unslick");
      }
    }
  }

  initializeSlider(); // Panggil fungsi saat halaman dimuat

  $(window).resize(function () {
    initializeSlider(); // Panggil fungsi saat ukuran jendela diubah
  });
});
