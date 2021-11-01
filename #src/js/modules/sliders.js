
function sliders() {
  $('.portfolio__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12.5H5" stroke="#373737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5.5L5 12.5L12 19.5" stroke="#373737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12.5H19" stroke="#373737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5.5L19 12.5L12 19.5" stroke="#373737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  })

  $('.reviews__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12.5H5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5.5L5 12.5L12 19.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12.5H19" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5.5L19 12.5L12 19.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  })
}

export default sliders