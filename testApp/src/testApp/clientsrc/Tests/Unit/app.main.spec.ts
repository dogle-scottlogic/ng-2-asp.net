// Sanity test 
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts"/> 

import { TestBed } from '@angular/core/testing';

describe('Sanity Test', () => {

    // provide our implementations or mocks to the dependency injector
    beforeEach(() => TestBed.configureTestingModule({
        providers: []
    }));

    it('should setup a working test suite', () => {
        expect(true).toEqual(true);
    });
});
