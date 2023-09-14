
describe('Main section of home page', () => {

    before(() => {

        browser.url('http://czechitas-datestovani-hackathon.cz')  // open the website

    })


    it('has correct header', () => {
        expect($$('.header-hotel-name')).toHaveText('Three foxes lounge');  // check if Header have text Three foxes lounge
    })

    it('has correct search form', () => {
        expect($$('#search_room_submit')).toExist    // checked if exist search form
    })


    it('has correct text interior section', () => {
        expect($$('#hotelInteriorBlock p.home_block_heading')).toHaveText('Interior');  // check if Interior section have text Interior
    })

    it('has correct amenities section', () => {

        expect($('#hotelAmenitiesBlock p.home_block_heading')).toHaveText('Amenities'); // check if Amenitis section have text Amenities

    })


    it('has correct Our Rooms section', () => {

        expect($('#hotelRoomsBlock p.home_block_heading')).toHaveText('Our Rooms');   // check if Rooms section have text Our Rooms

    })

    it('has correct What Our Guest Say Section', () => {

        expect($('#hotelTestimonialBlock p.home_block_heading')).toHaveText('What Our Guest Say?');  // check if What Our Guest Say Section have text What Our Guest Say?

    })

    it('has correct Footer section', () => {

        expect($('.footer-container')).toexist   // checked if exist footer section
    })

})