import { Component } from '@angular/core';

@Component({
    selector: 'mealList',
    templateUrl: '../templates/app.template.mealList.html',
    styleUrls: ['../styles/app.style.mealList.css']
})

export class MealListComponent {
    private mealList: string[] = ['mock value'];
}
