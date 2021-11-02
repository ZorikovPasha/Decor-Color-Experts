import formValidate from './validate'

function popups() {
  $("[data-callback]").on("click", function () {
    $('[data-popup-form]').addClass("shown");
    $("body").addClass("lock");
  });

  // Закрытие по клавише Esc.
  
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      $('[data-popup]').removeClass("shown");
      $("body").removeClass("lock");
    }
  });

  // переход по кнопке

  $("[data-submit]").on("click", function() {
    formValidate( $('#popup-form') )
    if ( $('#popup-form').valid() ) {
      $(this).closest('[data-popup]').removeClass("shown");
      $('[data-popup-message]').addClass("shown");
    }
  });

  $("[data-form-submit]").on("click", function() {
    formValidate( $('#discuss-form') )
    if ( $('#discuss-form').valid() ) {
      $('[data-popup-message]').addClass("shown");
    }
  });

  // Клик по крестику или по кнопке вернуться окна успеха

  $("[data-close]").on("click", function () {
    $(this).closest('[data-popup]').removeClass("shown");
    $("body").removeClass("lock");
  });
}

export default popups