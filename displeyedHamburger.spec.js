

describe('OV-32  displeyed our menu in hamburger button menu will consist links', () => {
    beforeEach(() => {

        browser.url('http://czechitas-datestovani-hackathon.cz')  // open the website

        $('.nav_toggle').click()  // open hamburger menu
        browser.pause(1000)
    })

    it('open button hamburger', () => {


        expect($('.menu_cont_left')).toBeDisplayedInViewport()  // expect open hamburger menu


    })

    it('button HOME exist and leads to the corresponding section', () => {


        expect($$('.navigation-link')[0]).toHaveText('Home')     // expect after opet hamburger menu page consist Home 
        $$('.navigation-link')[0].click()                        // click to the navigation link Home
        expect($('h1*=Three foxes lounge')).toBeDisplayedInViewport()   // expect to be displeyed in viewport - text Three foxes lounge

    })

    it('button Interior exist and leads to the corresponding section', () => {


        expect($$('.navigation-link')[1]).toHaveText('Interior')  // expect after opet hamburger menu page consist Interior
        $$('.navigation-link')[1].click()                         // click to the navigation link Interior


        expect($('p*=Interior')).toBeDisplayedInViewport()          // expect to be displeyed in viewport - text Interior

    })

    it('button Amenities exist and leads to the corresponding section', () => {


        expect($$('.navigation-link')[2]).toHaveText('Amenities')  // expect after opet hamburger menu page consist Amenites
        $$('.navigation-link')[2].click()                           // click to the navigation link Amenities


        expect($('p*=Amenities')).toBeDisplayedInViewport()         // expect to be displeyed in viewport - text Amenities

    })

    it('button Rooms exist and leads to the corresponding section', () => {


        expect($$('.navigation-link')[3]).toHaveText('Rooms')  // expect after opet hamburger menu page consist Rooms
        $$('.navigation-link')[3].click()                       // click to the navigation link Rooms


        expect($('p*=Our Rooms')).toBeDisplayedInViewport()        // expect to be displeyed in viewport - text Our Rooms

    })


    it('button Testimonials exist and leads to the corresponding section', () => {


        expect($$('.navigation-link')[4]).toHaveText('Testimonials')  // expect after opet hamburger menu page consist Testimonials
        $$('.navigation-link')[4].click()                               // click to the navigation link Testimonials

        browser.pause(2000)
        expect($('#hotelTestimonialBlock')).toBeDisplayedInViewport()       // expect to be displeyed in viewport - iD Testiomonials

    })

    it('button Legal Notice exist and leads to the corresponding section', () => {

        expect($$('.navigation-link')[5]).toHaveText('Legal Notice')  // expect after opet hamburger menu page consist Legal Notice
        $$('.navigation-link')[5].click()                               // click to the navigation link Legal Notice


        expect($$('h2*=Legal')).toBeDisplayedInViewport()               // expect to be displeyed in viewport - text Legal

    })

    it('button About us exist and leads to the corresponding section', () => {

        expect($$('.navigation-link')[6]).toHaveText('About us')  // expect after opet hamburger menu page consist About Us
        $$('.navigation-link')[6].click()                           // click to the navigation link About Us


        expect($('h1')).toBeDisplayedInViewport()               // expect to be displeyed in viewport h1
        expect($('h1')).toHaveText('ABOUT US')                   // expect to be displeyed text ABOUT US

    })
    it('button Contact exist and leads to the corresponding section', () => {

        expect($$('.navigation-link')[7]).toHaveText('Contact')  // expect after opet hamburger menu page consist Contact
        $$('.navigation-link')[7].click()                       // click to the navigation link Contact


        expect($('p*=Contact Us')).toBeDisplayedInViewport()    // expect to be displeyed in viewport - text Contact us

    })

    it('close menu hamburger', () => {

        $('.icon-close').click()     // click to "X" for close

        browser.pause(1000)
        expect($('.icon-close')).not.toBeDisplayedInViewport()  // right menu is closed - expect not to be displayed

    })
})