// Sanity test 
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts"/> 
"use strict";
var testing_1 = require('@angular/core/testing');
describe('Sanity Test', function () {
    // provide our implementations or mocks to the dependency injector
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        providers: []
    }); });
    it('should setup a working test suite', function () {
        expect(true).toEqual(true);
    });
});
//# sourceMappingURL=app.main.spec.js.map