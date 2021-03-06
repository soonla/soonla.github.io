Splitting();

const view_box_Slider01 = new Swiper(".view_box", {
  autoplay: true,
  speed: 1000,
  effect: "fade",
  loop: true,
  navigation: {
    prevEl: ".tab .prev",
    nextEl: ".tab .next",
  },
});

const index_main_Slider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "fade",
  loop: true,
  navigation: {
    prevEl: "#mainVisual .prev",
    nextEl: "#mainVisual .next",
  },
});

const brand_school_Slider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "fade",
  loop: true,
  navigation: {
    prevEl: "#mainVisual .prev",
    nextEl: "#mainVisual .next",
  },
});

const productSlider = new Swiper("#mainVisual .visual_box", {
  speed: 600,
  slidesPerView: 3, //화면에 보여지는 갯수
  slidesPerGroup: 3, //묶음
  navigation: {
    prevEl: "#project .prev2",
    nextEl: "#project .next2", /////////////////////위아래로 프로젝트를 바꿔야함 근데 모르겠음...
  },
});

gsap.from("#mainVisual .slogan .main .char", { opacity: 0, x: 550, ease: "power4", duration: 1, stagger: 0.1 });

const header = $("#header");
const btnAll = $(".all");
const gnb = $("#gnb");
const gnbList = $("#gnb .list > li");
const depth02 = gnb.find(".list > li > .depth02 ");
const depth01 = gnb.find(".list > li > a");
//gnb하단을 합치는 큰 배경 메뉴 설정
/*
// fulldown 메뉴
gnbList.on("mouseenter", function () {
  header.addClass("open");
});
gnbList.on("mouseleave", function () {
  header.removeClass("open");
});
*/

//마우스 gnb에 들어가고 나갈때
gnbList.on("mouseenter", function () {
  const selectedDepth02 = $(this).find(".depth02");
  selectedDepth02.stop().slideDown(200);
});
gnbList.on("mouseleave", function () {
  const selectedDepth02 = $(this).find(".depth02");
  selectedDepth02.stop().slideUp(100);
});
$(window).on("scroll", function () {
  //console.log($(window).scrollTop());
  const st = $(window).scrollTop();
  if (st > 0) {
    if (!header.hasClass("scroll")) {
      header.addClass("scroll");
    }
  } else {
    if (header.hasClass("scroll")) {
      header.removeClass("scroll");
    }
  }
});

// 행위

const btnTop = $(".btnTop");
$(window).on("scroll", function () {
  const st = $(window).scrollTop();
  if (st > 0) {
    if (!header.hasClass("scroll")) {
      header.addClass("scroll");
    }
  } else {
    if (header.hasClass("scroll")) {
      header.removeClass("scroll");
    }
  }
});

btnTop.on("click", function () {
  $(window).scrollTop(0);
  gsap.to("html,body", { scrollTop: 0, duration: 0.5 });
});

//브랜드 소개, 스와이프
const introduceSlider = new Swiper(".introduce .mask", {
  slidesPerView: 1,
  spaceBetween: 20,

  loop: true,
  navigation: {
    nextEl: ".introduce .next",
    prevEl: ".introduce .prev",
  },
  pagination: {
    el: ".introduce .pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

//instagram 하트 색깔넣기
//->이미지 바꾸는 기능수행 함수
$(document).ready(function () {
  /*웹페이지 열었을 때*/
  $(".on").show();
  $(".off").hide();

  /*img1을 클릭했을 때 img2를 보여줌*/
  $(".on").click(function () {
    $(".on").hide();
    $(".off").show();
  });

  /*img2를 클릭했을 때 img1을 보여줌*/
  $(".off").click(function () {
    $(".on").show();
    $(".off").hide();
  });
});

//여기서부터 0718연습

btnAll.on("click", function () {
  //jQuery class관련한 4가지 메서드를 제공한다.  addClass, removeClass, hasClass, toggleClass
  gnb.toggleClass("on");
  btnAll.toggleClass("on");
  depth02.stop().delay(500).slideUp();
});

depth01.on("click", function (e) {
  console.log("aaa");
  const selectedDepth02 = $(this).siblings(".depth02");
  const parentDepth02 = $(this).parent().siblings().find(".depth02");
  parentDepth02.stop().slideUp();
  selectedDepth02.stop().slideToggle(); //  show() 메서드는 display를 block으로 바꿔 준다.  hide() 는 display를 none으로 바꿔준다. toggle()
  return false;
});
