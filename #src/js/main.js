import sliders from './modules/sliders'
import popups from './modules/popup'
import Survey from './modules/survey'
import responsive from './modules/responsive'
import toggleMobileMenu from './modules/toggle-mobile-menu'
import toggleMore from "./modules/load-more"

function makeInputChosen() {
  if ( !$(this).hasClass('active') ) {
    $(this).siblings().each(function(_, label) {
      $(label).removeClass('active')
    })
    $(this).addClass('active')
  }
}

$(function() {

  sliders()
  popups()
  responsive();
  $(window).resize(() => {
    responsive()
  })
  toggleMobileMenu()

  $('[data-fancybox]').fancybox({});
  $('.item__label').on('click', makeInputChosen)

  const surveyItems = $('[data-survey-item]')
  const survey = new Survey(surveyItems)

  survey.enableMoveOn()
  survey.enableMoveBackw()
  survey.displayCurrentQuestion()
  survey.blockSubmit()
  survey.submitForm()

  toggleMore()
  new WOW().init();
})