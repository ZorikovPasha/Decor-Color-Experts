import sliders from './modules/sliders'
import popups from './modules/popup'

function makeInputChosen() {
  if ( !$(this).hasClass('active') ) {
    $(this).siblings().each(function(idx, label) {
      $(label).removeClass('active')
    })
    $(this).addClass('active')
  }
}

$(function() {

  sliders()
  popups()

  $('[data-fancybox]').fancybox({});

  $('.item__label').on('click', makeInputChosen)
})