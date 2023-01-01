export function toggleNav() {
  $(".nav-menu").toggleClass("active");
  $(this).toggleClass("active");
}

$(".nav-item").each(function () {
  $(this).on("click", function (e) {
    $(".nav-menu").removeClass("active");
    $("#btn-mobile").removeClass("active");
  });
});


