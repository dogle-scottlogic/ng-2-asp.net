///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./Components/app";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: []
})
export class AppModule { }