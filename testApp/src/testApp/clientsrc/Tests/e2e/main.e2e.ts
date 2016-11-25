///<reference path="../../../node_modules/@types/jasmine/index.d.ts"/>
/// <reference path="../../../node_modules/@types/protractor/index.d.ts" />

describe('App', () => {

    beforeEach(() => {
        browser.get('/');
    });


    it('should have a title', () => {
        let subject = browser.getTitle();
        let result = 'My App';
        expect(subject).toEqual(result);
    });

    it('should have header', () => {
        let subject = element(by.css('h1')).isPresent();
        let result = true;
        expect(subject).toEqual(result);
    });

    it('The header should read \'Article is ASP.NET Core with Angular 2 with Visual Studio\'', () => {
        let subject = element(by.css('h1')).isPresent();
        let result = true;
        expect(subject).toEqual(result);
    });

    it('should have a button', () => {
        let subject = element(by.css('button')).isPresent();
        let result = true;
        expect(subject).toEqual(result);
    });

    it('The button should say \'Click Me !!\'', () => {
        let subject = element(by.css('button')).getText();
        let result = 'Click Me !!';
        expect(subject).toEqual(result);
    });

});
