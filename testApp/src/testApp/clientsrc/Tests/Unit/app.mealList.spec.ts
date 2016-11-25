// Meal List Tests
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts"/> 

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MealListComponent } from '../../app/components/app.component.mealList';

let comp: MealListComponent;
let fixture: ComponentFixture<MealListComponent>;
let de: DebugElement;
let el: HTMLElement;

describe('MealListComponent', () => {

    // provide our implementations or mocks to the dependency injector
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MealListComponent], // declare the test component
        });

        fixture = TestBed.createComponent(MealListComponent);
        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the mealList <ul> by CSS element selector
        de = fixture.debugElement.query(By.css('ul'));
        el = de.nativeElement;
        TestBed.compileComponents();
    });


    it('should display no meals when first loaded', () => {
        fixture.detectChanges();
        console.log(el);
        // expect(el.textContent).toContain(comp.title);
    });
});
