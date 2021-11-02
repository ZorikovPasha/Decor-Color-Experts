
function responsive() {
	let w = $(window).outerWidth();

  if ( w < 769 ) {
    $('.menu').appendTo('.mob-menu__body')
  }
}

export default responsive