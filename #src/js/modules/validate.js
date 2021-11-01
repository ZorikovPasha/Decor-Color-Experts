
jQuery.validator.addMethod(
  "isPhone",
  function (value, element) {
    return this.optional(element) || /^[0-9-()+]{11,30}/.test(value);
  },
  "Пожалуйста, введите правильный номер телефона"
);

jQuery.validator.addMethod("isName", function (value, element) {
  return this.optional(element) || /^[А-ЯЁа-яё]{1,40}$/.test(value);
});

function formValidate(selector) {
  $(selector).validate({
    rules: {
      name: {
        isName: true,
      },
      phone: {
        required: true,
        isPhone: true,
      },
    },
    messages: {
      name: {
        required: "Введите ваше имя",
        isName: "Введите правильное имя",
      },
      phone: {
        required: "Введите номер телефона",
        isPhone: "Введите правильный номер телефона",
      },
      isAgree: {
        required: "Заполните данное поле",
      }
    },
  });
}

export default formValidate