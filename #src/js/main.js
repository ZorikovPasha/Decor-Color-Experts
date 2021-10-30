$(function() {
  $('.item__label').on('click', function() {
    if ( !$(this).hasClass('active') ) {
      $(this).siblings().each(function(idx, label) {
        $(label).removeClass('active')
      })
      $(this).addClass('active')
    }
  })
})