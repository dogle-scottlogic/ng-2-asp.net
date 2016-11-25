///<reference path="../../../node_modules/@types/jasmine/index.d.ts"/>
/// <reference path="../../../node_modules/@types/protractor/index.d.ts" />
describe('App', function () {
    beforeEach(function () {
        browser.get('/');
    });
    it('should have a title', function () {
        var subject = browser.getTitle();
        var result = 'My App';
        expect(subject).toEqual(result);
    });
    it('should have header', function () {
        var subject = element(by.css('h1')).isPresent();
        var result = true;
        expect(subject).toEqual(result);
    });
    it('The header should read \'Article is ASP.NET Core with Angular 2 with Visual Studio\'', function () {
        var subject = element(by.css('h1')).isPresent();
        var result = true;
        expect(subject).toEqual(result);
    });
    it('should have a button', function () {
        var subject = element(by.css('button')).isPresent();
        var result = true;
        expect(subject).toEqual(result);
    });
    it('The button should say \'Click Me !!\'', function () {
        var subject = element(by.css('button')).getText();
        var result = 'Click Me !!';
        expect(subject).toEqual(result);
    });
});
//# sourceMappingURL=main.e2e.js.map