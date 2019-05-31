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
        this.routerExtension.navigate(["'/tabs/default'"], { clearHistory: true });
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
                console.log('entro result');
                console.log(JSON.stringify(result));
                model.routerExtension.navigate(['/tabs/default']);
            }, function (errorMessage) {
                console.log('entro error');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCwrREFBaUY7QUFFakYsaUZBQWdFO0FBR2hFLElBQUksTUFBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztBQU9wQztJQUlJLHdCQUFvQixlQUFpQztRQUFqQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdDQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQUEsQ0FBQztJQUVGLGlDQUFRLEdBQVI7UUFDSTs7c0VBRThEO0lBQ2xFLENBQUM7SUFFRCwwQ0FBaUIsR0FBakI7UUFDSSw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELDBDQUFpQixHQUFqQjtRQUNDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFakIsSUFBSSxPQUFPLEVBQUU7WUFDVCxnQ0FBZ0M7WUFFdEMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDWCxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLO2dCQUM5QixZQUFZLEVBQUU7b0JBQ1osV0FBVyxFQUFFLEtBQUssR0FBQyxPQUFPO29CQUMxQixrQkFBa0IsRUFBRSxnQ0FBZ0MsQ0FBQyw4QkFBOEI7aUJBQ3BGO2FBQ0osQ0FBQyxDQUFDLElBQUksQ0FDRCxVQUFVLE1BQU07Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtZQUN6RCxDQUFDLEVBQ0QsVUFBVSxZQUFZO2dCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUNOLENBQUM7U0FFQzthQUFJO1lBQ0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLE9BQU8sRUFBQyxzQkFBc0I7YUFDakMsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDakMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUF2RFcsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FLdUMseUJBQWdCO09BSjVDLGNBQWMsQ0F3RDFCO0lBQUQscUJBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IHsgRmVlZGJhY2ssIEZlZWRiYWNrVHlwZSwgRmVlZGJhY2tQb3NpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmVlZGJhY2tcIjtcbmltcG9ydCB7IEZpcmViYXNlVHJhY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZVwiO1xuaW1wb3J0IHtMb2FkaW5nSW5kaWNhdG9yfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XG5pbXBvcnQgeyBhbGVydCwgcHJvbXB0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgaXNJT1MsaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmxldCBsb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcImxvZ2luLXBhZ2VcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdGNlbHVsYXI6c3RyaW5nO1xuICAgIHByaXZhdGUgZmVlZGJhY2s6IEZlZWRiYWNrOyAgICAgICAgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbjogUm91dGVyRXh0ZW5zaW9ucykgeyBcbiAgICAgICAgdGhpcy5mZWVkYmFjayA9IG5ldyBGZWVkYmFjaygpO1xuICAgIH07XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfSAgICBcblxuICAgIG9uTmF2aWdhdGVXZWxjb21lKCkge1xuICAgICAgICAvLyBOYXZpZ2F0ZSB0byB3ZWxjb21lIHBhZ2Ugd2l0aCBjbGVhckhpc3RvcnlcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoW1wiJy90YWJzL2RlZmF1bHQnXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBvblNpZ25pbkJ1dHRvblRhcCgpOiB2b2lkIHtcdFxuICAgIFx0Y29uc3QgbW9kZWwgPSB0aGlzO1xuICAgIFx0Y29uc3QgY2VsdWxhciA9IHRoaXMuY2VsdWxhcjtcbiAgICBcdGNvbnNvbGUubG9nKGNlbHVsYXIpXG5cbiAgICAgICAgaWYgKGNlbHVsYXIpIHtcbiAgICAgICAgICAgIC8vIGNhbGwgZmlyZWJhc2UgbG9naW4gICAgICAgICBcdFxuXG4gICAgXHRcdGZpcmViYXNlLmxvZ2luKHtcbiAgICBcdFx0ICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QSE9ORSxcbiAgICBcdFx0ICAgIHBob25lT3B0aW9uczoge1xuICAgIFx0XHQgICAgICBwaG9uZU51bWJlcjogJys1NycrY2VsdWxhcixcbiAgICBcdFx0ICAgICAgdmVyaWZpY2F0aW9uUHJvbXB0OiBcIlRoZSByZWNlaXZlZCB2ZXJpZmljYXRpb24gY29kZVwiIC8vIGRlZmF1bHQgXCJWZXJpZmljYXRpb24gY29kZVwiXG4gICAgXHRcdCAgICB9XG4gICAgXHRcdH0pLnRoZW4oXG4gICAgXHRcdCAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHsgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbnRybyByZXN1bHQnKTtcdFx0ICAgICAgICBcbiAgICBcdFx0ICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwucm91dGVyRXh0ZW5zaW9uLm5hdmlnYXRlKFsnL3RhYnMvZGVmYXVsdCddKVxuICAgIFx0XHQgICAgICB9LFxuICAgIFx0XHQgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbnRybyBlcnJvcicpO1xuICAgIFx0XHQgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgXHRcdCAgICAgIH1cbiAgICBcdFx0KTsgIFxuICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBtb2RlbC5mZWVkYmFjay53YXJuaW5nKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOidJbnRyb2R1Y2UgdHUgY2VsdWxhcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gICAgICAgICAgICAgIFxuICAgIH1cbiAgIFxuICAgIHNhbGlyKCk6dm9pZHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NhbGlvIHNlc2lvbicpXG5cdFx0ZmlyZWJhc2UubG9nb3V0KCk7ICAgXG5cdH1cbn1cbiJdfQ==