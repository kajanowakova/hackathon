const loginPage = require('../pages/login.page');

// 
describe('My Personal Information', () => {
    let userEmail = 'v.zinglarova@gmail.com';
    let password = 'heslo123';

    before(() => {
        // otevři stránku
        browser.url('http://czechitas-datestovani-hackathon.cz');
        // přihlaš uživatele
        loginPage.login(userEmail, password);
        // klikni na tlačítko "MY PERSONAL INFORMATION"
        $('a=My personal information').click();
    });

    it('have valid First Name', () => {
        // zkontroluj jméno uživatele
        expect($('#firstname')).toHaveValue('Veronika');
    });

    it('have valid Last Name', () => {
        // zkontroluj příjmení uživatele
        expect($('#lastname')).toHaveValue('Novakova');
    });

    it('have valid E-mail adress', () => {
        // zkontroluj e-mail uživatele
        expect($('#email')).toHaveValue(userEmail);
        browser.pause(5000)
    });

});