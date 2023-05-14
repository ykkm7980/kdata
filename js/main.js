$(document).ready(function(){
  $("a").click(function(e){
    e.preventDefault();  
  }); 

  // 메뉴에 마우스 오버하면 모든 서브메뉴와 서브메뉴 배경 내려옴
  $("nav").mouseover(function(){
      $(".dep-2").stop().slideDown(); 
      $(".sub-bg").stop().slideDown();
      $(".over-bg").show();  
  });
  $(".over-bg").mouseover(function(){
    $(".dep-2").stop().slideUp();
    $(".sub-bg").stop().slideUp();
    $(".over-bg").hide();
  });
  //전체메뉴 팝업 
  $(".menu-box .all-menu").click(function(){
    $(".pop-mune").show();
    $(".dep-2").hide();
    $(".sub-bg").hide();
    $(".over-bg").hide();
    $("html,body").css('overflow-y','hidden')
  });
  $(".pop-mune-inner > a").click(function(){
    $(".pop-mune").hide();
    $("html,body").css('overflow-y','visible')
  });

  var swiper01 = new Swiper(".popSwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    slideActiveClass: "active",
    loop: true,
    effect : 'fade',
  });

  var swiper02 = new Swiper(".exSwiper", {
    slidesPerView: "auto",
    loop: true,
    slideActiveClass: "active",
    centeredSlides: true,
    pagination: {
      el: ".exSwiper .swiper-pagination",
      type: "fraction",
        formatFractionCurrent: function (number) {
          return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
          return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
  });

  var swiper03 = new Swiper(".listSwiper", {
    slidesPerView: "auto",
    loop: true,
    loopAdditionalSlides: 1,
    pagination: {
      el:".pagination-fraction",
      type: "fraction",
    },
    pagination: {
          el:".pagination-progressbar",
          type: "progressbar",
        },
    navigation: {
      nextEl: ".controller .swiper-button-next",
      prevEl: ".controller .swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

    var swiper04 = new Swiper(".listSwiper", {
      slidesPerView: "auto",
      loop: true,
      pagination: {
      el:".pagination-fraction",
      type: "fraction",
    },
    });
  // 스와이퍼 연동
    swiper03.controller.control =swiper04;
    swiper04.controller.control =swiper03;
  
  
  $(".start").on("click",function(){
    swiper03.autoplay.start();
    return false;
  });
  $(".stop").on("click",function(){
    swiper03.autoplay.stop();
    return false; 
  });
  $(".stop").click(function(){
    $(".start").addClass("active");
    $(".stop").addClass("active");
  });
  $(".start").click(function(){
    $(".start").removeClass("active");
    $(".stop").removeClass("active");
  });
 

  $(".news-tap > ul").hide();
  $(".news-tap > ul:first").show();
  var $tablink = $(".news-title ul li a").click(function(){
    var idx=$tablink.index(this);
    $(".news-title ul li a").removeClass("active")
    $(".news-title ul li a").eq(idx).addClass("active");
    $(".news-tap > ul").hide();
    $(".news-tap > ul").eq(idx).show();
  });
  
  $('.top').click(function(){
    $('html, body').animate({"scrollTop":0});
  });

});
