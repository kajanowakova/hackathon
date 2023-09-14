

describe('OV-30 - Newsletter subscription', () => {
  before(() => {

    browser.url('http://czechitas-datestovani-hackathon.cz')  // open the website

  })

  it('newsletter subscription', () => {


    let newsletterInput = $('#newsletter-input') // defined input 


    newsletterInput.setValue(`mujemail+${Math.floor(Math.random() * 100000)}@gmail.com`) // add Email with random adress

    $('.btn.button.button-medium.newsletter-btn').click() // click button for confirmation email

    expect($('p.alert.alert-success')).toHaveText('Newsletter : A verification email has been sent. Please check your inbox.') // expect pops up verification test

  })



})