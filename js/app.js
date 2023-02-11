$(function () {
  navSlide(); //네비바 슬라이드
  navOn(); //네비바 활성화
  mNavShow(); //모바일 네비바 활성화, 닫기
  mNavLnd(); //모바일 네비바 lnb
  mNavWeb(); //웹사이즈에 따라 네비바 닫기
  infoSlide(); //첫항목 슬라이더
  eventSlide(); //행사 안내 슬라이더
  bannerSlide(); //배너 슬라이더
  familyClk(); //패밀리 사이트 목록
});

function navSlide() {
  let gnb = $(".gnb");
  let lnb = $(".lnb");

  gnb.hover(
    function () {
      lnb.stop().slideDown();
    },
    function () {
      lnb.stop().slideUp();
    }
  );
}

function navOn() {
  let gnbli = $(".gnb-wrap li");

  gnbli.hover(
    function () {
      $(this).addClass("on");
    },
    function () {
      $(this).removeClass("on");
    }
  );
}

function mNavShow() {
  let mMenu = $(".mmenu-btn");
  let mMenuClose = $(".mhead-top-close");
  let mNav = $(".mnav-wrap");

  mMenu.on("click", function () {
    mNav.fadeIn();
    $("body").addClass("menubody");
  });

  mMenuClose.on("click", function () {
    mNav.fadeOut();
    $("body").removeClass("menubody");
  });

  $(".mnav-bg").on("click", function (e) {
    if (e.target === e.currentTarget) {
      mNav.fadeOut();
      $("body").removeClass("menubody");
    }
  });
}

function mNavLnd() {
  let mgnb = $(".mgnb-list");

  mgnb.on("click", function () {
    if ($(this).hasClass("active") == false) {
      $(this).addClass("active");
      $(this).find("img").addClass("active-arrow");
      $(this).children("ul").slideDown();
    } else {
      $(this).removeClass("active");
      $(this).find("img").removeClass("active-arrow");
      $(this).children("ul").slideUp();
    }
  });
}

function mNavWeb() {
  let mNav = $(".mnav-wrap");

  $(window).on("resize", function () {
    clearTimeout(null);
    timer = setTimeout(function () {
      if (window.innerWidth > 992) {
        mNav.hide();
        $("body").removeClass("menubody");
      }
    }, 300);
  });
}

function infoSlide() {
  $(".info-wrap").slick({
    Infinity: true,
    arrows: false,
    dots: true,
  });
}

function eventSlide() {
  $(".big-box-wrap").slick({
    infinity: true,
    arrows: true,
    dots: false,
  });
}

function bannerSlide() {
  $(".banner-cont").slick({
    infinity: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });
}

function familyClk() {
  let family = $(".family");
  let famlist = $(".family-list");

  family.on("click", function (e) {
    e.stopPropagation();
    if (family.hasClass("active") == false) {
      family.addClass("active");
      famlist.fadeIn();
    } else {
      family.removeClass("active");
      famlist.fadeOut();
    }
  });

  $("html").on("click", function (e) {
    if (!$(e.target).hasClass("family-list")) {
      famlist.fadeOut();
      family.removeClass("active");
    }
  });
}
