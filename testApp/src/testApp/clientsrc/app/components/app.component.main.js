"use strict";
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ASP.NET Core with Angular 2 with Visual Studio';
    }
    AppComponent.prototype.btnclick = function () {
        console.log('Test !!');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: require('../templates/app.template.main.html')
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.main.js.map