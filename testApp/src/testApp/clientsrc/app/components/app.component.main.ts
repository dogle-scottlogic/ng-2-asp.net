import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '../templates/app.template.main.html',
    styleUrls: ['../styles/app.style.main.css']
})
export class AppComponent {
    title = 'ASP.NET Core with Angular 2 with Visual Studio';

    btnclick() {
        console.log('Test !!');
    }
}
