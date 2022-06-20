$(document).ready(function () {
  $(".header-icon-toogle").on("click", function (e) {
    $("#menu_toogle").addClass("active");
    $("body").addClass("overflow");
  });
  $(".menu-toogle-header-icon-close").on("click", function (e) {
    $("#menu_toogle").removeClass("active");
    $("body").removeClass("overflow");
  });
  $("#croll_to_top").on("click", function (e) {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  var elementPosition = $(".header").offset();
  $(window).scroll(function () {
    if ($(window).scrollTop() > elementPosition.top) {
      $(".header").addClass("fixed");
    } else {
      //   $(".header").css("position", "static");
      $(".header").removeClass("fixed");
    }
  });

  // Animate
  $(".concept-title").on("inview", function (e, t) {
    $(this).stop().addClass("animate__backInRight");
  });
});
