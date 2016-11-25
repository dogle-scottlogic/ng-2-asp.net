import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component.main';
import { MaterialModule } from '@angular/material';
import { MealListComponent } from './components/app.component.mealList'

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        MealListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
