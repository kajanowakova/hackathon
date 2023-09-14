const templatePage = require('../pages/template.page')

describe('Log out + log in - user', () => {
    before(() => {

        browser.url('http://czechitas-datestovani-hackathon.cz')  // open the website

    })

    it('log in TC-OV19', () => {

        let login = 'monika.nov@gmail.com'      // definition login
        let password = 'MonikaNov123'           // definition password
        let logInButton = $('#SubmitLogin')

        $('.hide_xs').click()                  // click to button sing in

        $('#email').setValue(login)             // fill value login
        $('#passwd').setValue(password)         // fill value password
        logInButton.click()                     // click log in button


        expect($('.page-heading')).toHaveText('MY ACCOUNT')  // expect page after sing in have text my account

    })


    it('log out TC-OV18', () => {


        $('#user_info_acc').click()                        // click to user info
        browser.pause(2000)
        $('.header_user_info [title="Log me out"]').click()    // click to log out
        browser.pause(2000)
        expect($('.page-heading')).toHaveText('AUTHENTICATION') // expect after log out we are in page with text authentication

    })
})