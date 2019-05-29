"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var firebase = require("nativescript-plugin-firebase");
var nativescript_feedback_1 = require("nativescript-feedback");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var loader = new nativescript_loading_indicator_1.LoadingIndicator();
var LoginComponent = /** @class */ (function () {
    function LoginComponent(routerExtension) {
        this.routerExtension = routerExtension;
        this.feedback = new nativescript_feedback_1.Feedback();
    }
    ;
    LoginComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    };
    LoginComponent.prototype.onNavigateWelcome = function () {
        // Navigate to welcome page with clearHistory
        this.routerExtension.navigate(["../welcome"], { clearHistory: true });
    };
    LoginComponent.prototype.onSigninButtonTap = function () {
        var model = this;
        var celular = this.celular;
        console.log(celular);
        if (celular) {
            // call firebase login         	
            firebase.login({
                type: firebase.LoginType.PHONE,
                phoneOptions: {
                    phoneNumber: '+57' + celular,
                    verificationPrompt: "The received verification code" // default "Verification code"
                }
            }).then(function (result) {
                JSON.stringify(result);
                console.log(result);
                model.routerExtension.navigate(['/tabs/default']);
            }, function (errorMessage) {
                console.log(errorMessage);
            });
        }
        else {
            model.feedback.warning({
                message: 'Introduce tu celular'
            });
        }
    };
    LoginComponent.prototype.salir = function () {
        console.log('salio sesion');
        firebase.logout();
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "login-page",
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCwrREFBaUY7QUFFakYsaUZBQWdFO0FBR2hFLElBQUksTUFBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztBQU9wQztJQUlJLHdCQUFvQixlQUFpQztRQUFqQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdDQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQUEsQ0FBQztJQUVGLGlDQUFRLEdBQVI7UUFDSTs7c0VBRThEO0lBQ2xFLENBQUM7SUFFRCwwQ0FBaUIsR0FBakI7UUFDSSw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCwwQ0FBaUIsR0FBakI7UUFDQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRWpCLElBQUksT0FBTyxFQUFFO1lBQ1QsZ0NBQWdDO1lBRXRDLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSztnQkFDOUIsWUFBWSxFQUFFO29CQUNaLFdBQVcsRUFBRSxLQUFLLEdBQUMsT0FBTztvQkFDMUIsa0JBQWtCLEVBQUUsZ0NBQWdDLENBQUMsOEJBQThCO2lCQUNwRjthQUNKLENBQUMsQ0FBQyxJQUFJLENBQ0QsVUFBVSxNQUFNO2dCQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2QsS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO1lBQ3pELENBQUMsRUFDRCxVQUFVLFlBQVk7Z0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUNOLENBQUM7U0FFQzthQUFJO1lBQ0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLE9BQU8sRUFBQyxzQkFBc0I7YUFDakMsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDakMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUF0RFcsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FLdUMseUJBQWdCO09BSjVDLGNBQWMsQ0F1RDFCO0lBQUQscUJBQUM7Q0FBQSxBQXZERCxJQXVEQztBQXZEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IHsgRmVlZGJhY2ssIEZlZWRiYWNrVHlwZSwgRmVlZGJhY2tQb3NpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmVlZGJhY2tcIjtcbmltcG9ydCB7IEZpcmViYXNlVHJhY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZVwiO1xuaW1wb3J0IHtMb2FkaW5nSW5kaWNhdG9yfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XG5pbXBvcnQgeyBhbGVydCwgcHJvbXB0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgaXNJT1MsaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmxldCBsb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcImxvZ2luLXBhZ2VcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdGNlbHVsYXI6c3RyaW5nO1xuICAgIHByaXZhdGUgZmVlZGJhY2s6IEZlZWRiYWNrOyAgICAgICAgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbjogUm91dGVyRXh0ZW5zaW9ucykgeyBcbiAgICAgICAgdGhpcy5mZWVkYmFjayA9IG5ldyBGZWVkYmFjaygpO1xuICAgIH07XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfSAgICBcblxuICAgIG9uTmF2aWdhdGVXZWxjb21lKCkge1xuICAgICAgICAvLyBOYXZpZ2F0ZSB0byB3ZWxjb21lIHBhZ2Ugd2l0aCBjbGVhckhpc3RvcnlcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoW1wiLi4vd2VsY29tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgb25TaWduaW5CdXR0b25UYXAoKTogdm9pZCB7XHRcbiAgICBcdGNvbnN0IG1vZGVsID0gdGhpcztcbiAgICBcdGNvbnN0IGNlbHVsYXIgPSB0aGlzLmNlbHVsYXI7XG4gICAgXHRjb25zb2xlLmxvZyhjZWx1bGFyKVxuXG4gICAgICAgIGlmIChjZWx1bGFyKSB7XG4gICAgICAgICAgICAvLyBjYWxsIGZpcmViYXNlIGxvZ2luICAgICAgICAgXHRcblxuICAgIFx0XHRmaXJlYmFzZS5sb2dpbih7XG4gICAgXHRcdCAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEhPTkUsXG4gICAgXHRcdCAgICBwaG9uZU9wdGlvbnM6IHtcbiAgICBcdFx0ICAgICAgcGhvbmVOdW1iZXI6ICcrNTcnK2NlbHVsYXIsXG4gICAgXHRcdCAgICAgIHZlcmlmaWNhdGlvblByb21wdDogXCJUaGUgcmVjZWl2ZWQgdmVyaWZpY2F0aW9uIGNvZGVcIiAvLyBkZWZhdWx0IFwiVmVyaWZpY2F0aW9uIGNvZGVcIlxuICAgIFx0XHQgICAgfVxuICAgIFx0XHR9KS50aGVuKFxuICAgIFx0XHQgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgXHRcdCAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICBcdFx0ICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBtb2RlbC5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoWycvdGFicy9kZWZhdWx0J10pXG4gICAgXHRcdCAgICAgIH0sXG4gICAgXHRcdCAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICBcdFx0ICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgIFx0XHQgICAgICB9XG4gICAgXHRcdCk7ICBcbiAgICAgICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbW9kZWwuZmVlZGJhY2sud2FybmluZyh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTonSW50cm9kdWNlIHR1IGNlbHVsYXInXG4gICAgICAgICAgICB9KVxuICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICB9XG4gICBcbiAgICBzYWxpcigpOnZvaWR7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWxpbyBzZXNpb24nKVxuXHRcdGZpcmViYXNlLmxvZ291dCgpOyAgIFxuXHR9XG59XG4iXX0=