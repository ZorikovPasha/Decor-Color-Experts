export default function () {
  $(".catalog__item").slice(0, 4).show();
  $(".catalog__item").slice(4, 8).hide();
  $("[data-show-more]").on("click", (e) => {
    e.preventDefault();

    $(".catalog__item:hidden").slice(0, 4).slideDown();
    if ($(".catalog__item:hidden").length == 0) {
      $("[data-show-more]").fadeOut("slow");
    }
  });
}