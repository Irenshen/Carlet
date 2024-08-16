$(document).ready(function () {
  const wrapper = $(".custom-select-wrapper");
  const selectTrigger = $(".custom-select-trigger");
  const customOptions = $(".custom-options");
  const options = $(".custom-option");
  const select = $("#hidden-select");
  const arrow = $(".arrow");

  // Открытие и закрытие выпадающего списка при клике на wrapper
  wrapper.on("click", function (e) {
    // Если выпадающий список закрыт, то открываем его
    if (!customOptions.is(":visible")) {
      customOptions.show();
      arrow.addClass("open");
    } else {
      customOptions.hide();
      arrow.removeClass("open");
    }
  });

  // Выбор опции
  options.on("click", function (e) {
    // Предотвращаем распространение события, чтобы не закрыть список сразу
    e.stopPropagation();
    options.removeClass("selected");
    $(this).addClass("selected");
    selectTrigger.find("span").text($(this).text());
    select.val($(this).data("value"));
    customOptions.hide();
    arrow.removeClass("open");
  });

  // Закрытие списка при клике вне его области
  $(document).on("click", function (e) {
    if (!wrapper.is(e.target) && wrapper.has(e.target).length === 0) {
      customOptions.hide();
      arrow.removeClass("open");
    }
  });

  let cardsSwiper = new Swiper(".mySwiper", {
    watchOverflow: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "visibleSlide",
    touchRatio: 1,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    navigation: {
      nextEl: ".steps .swiper-button-next",
      prevEl: ".steps .swiper-button-prev",
    },
    pagination: {
      el: ".steps .swiper-pagination",
      clickable: true,
    },
  });

  let cardsCarSwiper = new Swiper(".cardsCarSwiper", {
    watchOverflow: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "visibleSlide",
    touchRatio: 0,
    slidesPerView: 3,
    spaceBetween: 90,
    pagination: {
      el: ".cardsCarSwiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      960: {
        slidesPerView: 2,
        touchRatio: 1,
        spaceBetween: 17,
      },
      640: {
        touchRatio: 1,
        slidesPerView: 1,
        spaceBetween: 4,
      },
    },
  });

  //скрыть viber
  if (
    window.location.href.indexOf("lt") === -1 &&
    window.location.href.indexOf("lv") === -1 &&
    window.location.href.indexOf("pl") === -1
  ) {
    document.querySelectorAll(".viber").forEach((element) => {
      element.style.opacity = "1";
      element.style.visibility = "visible";
    });
  }

  //aнимация AOS
  AOS.init();
});
