$(function(){
    $(window).on("scroll", function () {
      const triggerOffset = $("#rwd").offset().top;

      if ($(window).scrollTop() >= triggerOffset) {
        $("header").addClass("on");
      } else {
        $("header").removeClass("on");
      }
    });


    let prevScroll = 0;
    const triggerOffset = $("#rwd").offset().top;

    $(window).on("scroll", function () {
      const currentScroll = $(this).scrollTop();

      if (currentScroll >= triggerOffset) {
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
    });

    gsap.utils.toArray(".sec").forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "0% 0%",
        // 상단고정
        pin: true,
        pinSpacing: true,
      });
    });
    // 스냅처리(특정 영역에 달라붙는 효과)
    ScrollTrigger.create({
      snap: 1 / (section.length - 1),
    });
})


