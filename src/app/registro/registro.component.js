"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var firebase = require("nativescript-plugin-firebase/app");
var nativescript_feedback_1 = require("nativescript-feedback");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var loader = new nativescript_loading_indicator_1.LoadingIndicator();
var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.feedback = new nativescript_feedback_1.Feedback();
    }
    RegistroComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    };
    RegistroComponent.prototype.onSignupButtonTap = function () {
        var model = this;
        model.email = "123@gmaiil.com";
        console.log(model.nombre);
        console.log(model.celular);
        if (model.nombre && model.celular) {
            firebaseWebApi.auth().createUserWithEmailAndPassword(model.nombre, model.email, model.nombre).then(function (user) {
                loader.hide();
                console.log("User created: " + JSON.stringify(user));
                console.log("User created: " + JSON.stringify(user.phoneNumber));
                // model.crearDatosUsuario(name,celular,email,user.uid);
            })
                .catch(function (error) {
                console.log("Error creating user: " + error);
                loader.hide();
            });
        }
        else {
        }
    };
    RegistroComponent.prototype.irAtras = function () {
        this.routerExtensions.back();
    };
    RegistroComponent = __decorate([
        core_1.Component({
            selector: "Registro",
            moduleId: module.id,
            templateUrl: "./registro.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], RegistroComponent);
    return RegistroComponent;
}());
exports.RegistroComponent = RegistroComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUNuRSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUM3RCwrREFBaUY7QUFDakYsaUZBQWdFO0FBRWhFLElBQUksTUFBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztBQVNwQztJQU9JLDJCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0NBQVEsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0k7O3NFQUU4RDtJQUNsRSxDQUFDO0lBRUQsNkNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ25CLEtBQUssQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUE7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0IsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFFL0IsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBVTtnQkFDekcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLHdEQUF3RDtZQUMzRCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7U0FFTjthQUFJO1NBRUo7SUFDTCxDQUFDO0lBQ0QsbUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBMUNRLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzt5Q0FRd0MseUJBQWdCO09BUDdDLGlCQUFpQixDQTJDN0I7SUFBRCx3QkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5jb25zdCBmaXJlYmFzZVdlYkFwaSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xuaW1wb3J0IHsgRmVlZGJhY2ssIEZlZWRiYWNrVHlwZSwgRmVlZGJhY2tQb3NpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmVlZGJhY2tcIjtcbmltcG9ydCB7TG9hZGluZ0luZGljYXRvcn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5sZXQgbG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcblxuaW1wb3J0IHsgQWRkRXZlbnRMaXN0ZW5lclJlc3VsdCwgVXNlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlJlZ2lzdHJvXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JlZ2lzdHJvLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0cm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbm9tYnJlOnN0cmluZztcbiAgICBjZWx1bGFyOnN0cmluZztcbiAgICBlbWFpbDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBmZWVkYmFjazogRmVlZGJhY2s7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5mZWVkYmFjayA9IG5ldyBGZWVkYmFjaygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG5cbiAgICBvblNpZ251cEJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSB0aGlzO1xuICAgICAgICBtb2RlbC5lbWFpbCA9IFwiMTIzQGdtYWlpbC5jb21cIlxuICAgICAgICBjb25zb2xlLmxvZyhtb2RlbC5ub21icmUpO1xuICAgICAgICBjb25zb2xlLmxvZyhtb2RlbC5jZWx1bGFyKTtcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAobW9kZWwubm9tYnJlICYmIG1vZGVsLmNlbHVsYXIpIHtcblxuICAgICAgICAgICAgZmlyZWJhc2VXZWJBcGkuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChtb2RlbC5ub21icmUsbW9kZWwuZW1haWwsbW9kZWwubm9tYnJlKS50aGVuKCh1c2VyOiBVc2VyKSA9PiB7XG4gICAgICAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGNyZWF0ZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGNyZWF0ZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkodXNlci5waG9uZU51bWJlcikpO1xuICAgICAgICAgICAgICAgLy8gbW9kZWwuY3JlYXJEYXRvc1VzdWFyaW8obmFtZSxjZWx1bGFyLGVtYWlsLHVzZXIudWlkKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjcmVhdGluZyB1c2VyOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICBsb2FkZXIuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgfVxuICAgIH0gICAgXG4gICAgaXJBdHJhcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICB9ICAgIFxufVxuIl19