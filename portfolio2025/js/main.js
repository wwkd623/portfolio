$(function(){
    let prevScroll = 0;
    const fixedTriggerPoint = $("#rwd1").offset().top;
    const hideTriggerPoint = $("#rwd2").offset().top;

    $(window).on("scroll", function () {
      const dynamicTriggerPoint = $("#rwd1").offset().top;

      if ($(window).scrollTop() >= dynamicTriggerPoint) {
        $("header").addClass("on");
      } else {
        $("header").removeClass("on");
      }

      const currentScroll = $(this).scrollTop();

      if (currentScroll >= fixedTriggerPoint) {
        if (currentScroll < prevScroll) {
          // 스크롤 올림 → header 내려오기 (보이기)
          $("header.on").stop().animate({ top: "0" }, 100);
        } else {
          // 스크롤 내림 → header 올라가기 (숨기기)
          $("header.on").stop().animate({ top: "-100px" }, 100);
        }
      } else {
        // 4번째 섹션 이전 → header 원래 상태 (고정 해제, 위치 초기화)
        $("header").stop().animate({ top: "0" }, 100);
      }

      prevScroll = currentScroll <= 0 ? 0 : currentScroll;

      const hideArea = $("#outro").offset().top;

      if ($(window).scrollTop() >= hideArea) {
        $("header").addClass("hide");
      } else {
        $("header").removeClass("hide");
      }

      // 위로가기 버튼
      const scrollTop = $(this).scrollTop();
      const coverHeight = $("#cover").outerHeight();

      if (scrollTop > coverHeight) {
        $("#toTop").addClass("show");
      } else {
        $("#toTop").removeClass("show");
      }
    });

    $("#toTop").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 400);
    });


    const sec = gsap.utils.toArray(".sec");

    sec.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "0% 0%",
        // 상단고정
        pin: true,
        pinSpacing: true,
      });
    });

    var swiper = new Swiper(".wdslider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
})


