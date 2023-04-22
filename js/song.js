//토글메뉴
function tgMenu() {
  let tgmenu = document.querySelector(".toggle");
  tgmenu.classList.toggle("active");

  let menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}

$(document).ready(function () {
  //niceScroll
  $("body").niceScroll();

  $(".main_banner").slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    variableWidth: true,

    responsive: [
        {
            breakpoints: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
  });

  /* 앨범 버튼 스와이프 <> */
  new Swiper(".swiper-container", {
    slidesPerView: 3, //동시에 보여줄 슬라이드 갯수
    spaceBetween: 30, //슬라이드 간격
    slidesPerGroup: 3, //3개씩 넘김

    //그룹수가 맞지 않을 경우 빈칸으로 채우기
    loopFillGroupWithBlank: true,
    loop: true, //무한반복

    navigation: {
      //네비게이션
      prevEl: ".btn_prev", //이전
      nextEl: ".btn_next", //다음
    },

    breakpoints: {
      //화면의 넓이가 768px 이하일 때
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1, //하나씩 넘김
      },

      900: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },

      1279: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
    },
  });
});
