import formValidate from './validate'

function Survey(items) {
  this.items = items
  this.currentQuestion = 0
  this.totalQuestions = this.items.length
  this.isSomethingChosen = false

  this.currentQuestionInputs = []
  this.btnNext = $('[data-next]:not([type="submit"])')
  this.btnPrev = $('[data-prev]')
}

Survey.prototype.blockSubmit = function() {
  $('[data-next]:not([type="submit"])'). on('click', (e) => e.preventDefault())
  $('[data-prev]').on('click', (e) => e.preventDefault())
}

Survey.prototype.enableMoveOn = function() {
  this.btnNext.on('click', () => {
    this.currentQuestionInputs = $(this.items[this.currentQuestion]).find('input[required]')

    this.currentQuestionInputs.each((idx) => {
      $(this.currentQuestionInputs[idx]).prop('checked') ? this.isSomethingChosen = true : ''
    })

    if ( this.isSomethingChosen ) {
      this.currentQuestion += 1
      this.isSomethingChosen = false
      this.displayCurrentQuestion()
    }
  })
}

Survey.prototype.enableMoveBackw = function() {
  this.btnPrev.on('click', () => {
    this.currentQuestion -= 1
    this.displayCurrentQuestion()
  })
}

Survey.prototype.displayCurrentQuestion = function() {
  this.items.each(idx => $(this.items[idx]).removeClass('shown'))
  $(this.items[this.currentQuestion]).addClass('shown')
}

Survey.prototype.submitForm = function() {
  $('[data-next][type="submit"]').on('click', () => {
    formValidate( $('[data-survey-form]') )
    
    if ( $('[data-survey-form]').valid() ) {
      this.currentQuestion += 1
      this.isSomethingChosen = false
      this.displayCurrentQuestion()
    }
  })
}


export default Survey