﻿import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: require('../templates/app.template.main.html')
})
export class AppComponent {
    title = 'ASP.NET Core with Angular 2 with Visual Studio';

    btnclick() {
        console.log('Test !!');
    }
}