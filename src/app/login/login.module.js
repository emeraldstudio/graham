"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var login_routing_module_1 = require("./login-routing.module");
var login_component_1 = require("./login.component");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                login_routing_module_1.LoginRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                login_component_1.LoginComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxvREFBcUU7QUFDckUsK0RBQTREO0FBQzVELHFEQUFtRDtBQWVuRDtJQUFBO0lBQTJCLENBQUM7SUFBZixXQUFXO1FBYnZCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHlDQUFrQjtnQkFDbEIsK0JBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGdDQUFjO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUFBLEFBQTVCLElBQTRCO0FBQWYsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTG9naW5Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vbG9naW4tcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIExvZ2luUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBMb2dpbkNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZHVsZSB7IH0iXX0=