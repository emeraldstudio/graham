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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCwrREFBaUY7QUFFakYsaUZBQWdFO0FBR2hFLElBQUksTUFBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztBQU9wQztJQUlJLHdCQUFvQixlQUFpQztRQUFqQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdDQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQUEsQ0FBQztJQUVGLGlDQUFRLEdBQVI7UUFDSTs7c0VBRThEO0lBQ2xFLENBQUM7SUFFRCwwQ0FBaUIsR0FBakI7UUFDSSw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELDBDQUFpQixHQUFqQjtRQUNDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFakIsSUFBSSxPQUFPLEVBQUU7WUFDVCxnQ0FBZ0M7WUFFdEMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDWCxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLO2dCQUM5QixZQUFZLEVBQUU7b0JBQ1osV0FBVyxFQUFFLEtBQUssR0FBQyxPQUFPO29CQUMxQixrQkFBa0IsRUFBRSxnQ0FBZ0MsQ0FBQyw4QkFBOEI7aUJBQ3BGO2FBQ0osQ0FBQyxDQUFDLElBQUksQ0FDRCxVQUFVLE1BQU07Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDZCxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7WUFDekQsQ0FBQyxFQUNELFVBQVUsWUFBWTtnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQ04sQ0FBQztTQUVDO2FBQUk7WUFDRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDbkIsT0FBTyxFQUFDLHNCQUFzQjthQUNqQyxDQUFDLENBQUE7U0FDTDtJQUNMLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNqQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQXREVyxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQUt1Qyx5QkFBZ0I7T0FKNUMsY0FBYyxDQXVEMUI7SUFBRCxxQkFBQztDQUFBLEFBdkRELElBdURDO0FBdkRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgeyBGZWVkYmFjaywgRmVlZGJhY2tUeXBlLCBGZWVkYmFja1Bvc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mZWVkYmFja1wiO1xuaW1wb3J0IHsgRmlyZWJhc2VUcmFjZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL3BlcmZvcm1hbmNlL3BlcmZvcm1hbmNlXCI7XG5pbXBvcnQge0xvYWRpbmdJbmRpY2F0b3J9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBpc0lPUyxpc0FuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xubGV0IGxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwibG9naW4tcGFnZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0Y2VsdWxhcjpzdHJpbmc7XG4gICAgcHJpdmF0ZSBmZWVkYmFjazogRmVlZGJhY2s7ICAgICAgICBcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zKSB7IFxuICAgICAgICB0aGlzLmZlZWRiYWNrID0gbmV3IEZlZWRiYWNrKCk7XG4gICAgfTtcblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9ICAgIFxuXG4gICAgb25OYXZpZ2F0ZVdlbGNvbWUoKSB7XG4gICAgICAgIC8vIE5hdmlnYXRlIHRvIHdlbGNvbWUgcGFnZSB3aXRoIGNsZWFySGlzdG9yeVxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbi5uYXZpZ2F0ZShbXCInL3RhYnMvZGVmYXVsdCdcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cblxuICAgIG9uU2lnbmluQnV0dG9uVGFwKCk6IHZvaWQge1x0XG4gICAgXHRjb25zdCBtb2RlbCA9IHRoaXM7XG4gICAgXHRjb25zdCBjZWx1bGFyID0gdGhpcy5jZWx1bGFyO1xuICAgIFx0Y29uc29sZS5sb2coY2VsdWxhcilcblxuICAgICAgICBpZiAoY2VsdWxhcikge1xuICAgICAgICAgICAgLy8gY2FsbCBmaXJlYmFzZSBsb2dpbiAgICAgICAgIFx0XG5cbiAgICBcdFx0ZmlyZWJhc2UubG9naW4oe1xuICAgIFx0XHQgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBIT05FLFxuICAgIFx0XHQgICAgcGhvbmVPcHRpb25zOiB7XG4gICAgXHRcdCAgICAgIHBob25lTnVtYmVyOiAnKzU3JytjZWx1bGFyLFxuICAgIFx0XHQgICAgICB2ZXJpZmljYXRpb25Qcm9tcHQ6IFwiVGhlIHJlY2VpdmVkIHZlcmlmaWNhdGlvbiBjb2RlXCIgLy8gZGVmYXVsdCBcIlZlcmlmaWNhdGlvbiBjb2RlXCJcbiAgICBcdFx0ICAgIH1cbiAgICBcdFx0fSkudGhlbihcbiAgICBcdFx0ICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIFx0XHQgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgXHRcdCAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwucm91dGVyRXh0ZW5zaW9uLm5hdmlnYXRlKFsnL3RhYnMvZGVmYXVsdCddKVxuICAgIFx0XHQgICAgICB9LFxuICAgIFx0XHQgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgXHRcdCAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICBcdFx0ICAgICAgfVxuICAgIFx0XHQpOyAgXG4gICAgICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1vZGVsLmZlZWRiYWNrLndhcm5pbmcoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6J0ludHJvZHVjZSB0dSBjZWx1bGFyJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSAgICAgICAgICAgICAgXG4gICAgfVxuICAgXG4gICAgc2FsaXIoKTp2b2lke1xuICAgICAgICBjb25zb2xlLmxvZygnc2FsaW8gc2VzaW9uJylcblx0XHRmaXJlYmFzZS5sb2dvdXQoKTsgICBcblx0fVxufVxuIl19