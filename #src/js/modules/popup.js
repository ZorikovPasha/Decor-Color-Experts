import formValidate from './validate'

function popups() {
  $("[data-callback]").on("click", () => {
    $('[data-popup-form]').addClass("shown");
    $("body").css( "padding-right", window.innerWidth - document.body.clientWidth)
    $(".header").css( "padding-right", window.innerWidth - document.body.clientWidth)
    $("body").addClass("lock");
  });

  // Закрытие по клавише Esc.
  
  $(document).on("keydown", (e) => {
    if (e.key === "Escape") {
      $('[data-popup]').removeClass("shown");
      $("body").removeClass("lock");
      $("body").css( "padding-right", 0)
      $(".header").css( "padding-right", 0)
    }
  });

  // переход по кнопке

  $("[data-submit]").on("click", (e) => {
    e.preventDefault()
    formValidate( $('#popup-form') )
    if ( $('#popup-form').valid() ) {
      $('[data-popup-form]').removeClass("shown");
      $('[data-popup-message]').addClass("shown");
    }
  });

  $("[data-form-submit]").on("click", () => {
    formValidate( $('#discuss-form') )
    if ( $('#discuss-form').valid() ) {
      $('[data-popup-message]').addClass("shown");
    }
  });

  // Клик по крестику или по кнопке вернуться окна успеха

  $("[data-close]").on("click", () => {
    $('[data-popup]').removeClass("shown");
    $("body").removeClass("lock");
    $("body").css("padding-right", 0)
    $(".header").css("padding-right", 0)
  });
}

export default popups