"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// import { LoginComponent } from "./login/login.component";
var welcome_component_1 = require("./welcome/welcome.component");
// import { RegistroComponent } from "./registro/registro.component";
exports.COMPONENTS = [welcome_component_1.WelcomeComponent];
var routes = [
    { path: "", redirectTo: "/welcome", pathMatch: "full" },
    {
        // path: "login", component: LoginComponent
        path: "login", loadChildren: "~/app/login/login.module#LoginModule"
    },
    {
        path: "welcome", component: welcome_component_1.WelcomeComponent
    },
    {
        // path: "registro", component: RegistroComponent
        path: "registro", loadChildren: "~/app/registro/registro.module#RegistroModule"
    },
    {
        path: "tabs",
        loadChildren: "~/app/tabs/tabs.module#TabsModule"
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
            exports: [router_1.NativeScriptRouterModule],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSw0REFBNEQ7QUFDNUQsaUVBQStEO0FBQy9ELHFFQUFxRTtBQUV4RCxRQUFBLFVBQVUsR0FBRyxDQUFFLG9DQUFnQixDQUFDLENBQUM7QUFFOUMsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN2RDtRQUNJLDJDQUEyQztRQUMzQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxzQ0FBc0M7S0FDdEU7SUFDRDtRQUNJLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQjtLQUMvQztJQUNEO1FBQ0ksaURBQWlEO1FBQ2pELElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLCtDQUErQztLQUNsRjtJQUNEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixZQUFZLEVBQUUsbUNBQW1DO0tBQ3BEO0NBQ0osQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzVFLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG4vLyBpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgV2VsY29tZUNvbXBvbmVudCB9IGZyb20gXCIuL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnRcIjtcbi8vIGltcG9ydCB7IFJlZ2lzdHJvQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRTID0gWyBXZWxjb21lQ29tcG9uZW50XTtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi93ZWxjb21lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7XG4gICAgICAgIC8vIHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudFxuICAgICAgICBwYXRoOiBcImxvZ2luXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9sb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIndlbGNvbWVcIiwgY29tcG9uZW50OiBXZWxjb21lQ29tcG9uZW50XG4gICAgfSxcbiAgICB7XG4gICAgICAgIC8vIHBhdGg6IFwicmVnaXN0cm9cIiwgY29tcG9uZW50OiBSZWdpc3Ryb0NvbXBvbmVudFxuICAgICAgICBwYXRoOiBcInJlZ2lzdHJvXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9yZWdpc3Ryby9yZWdpc3Ryby5tb2R1bGUjUmVnaXN0cm9Nb2R1bGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcInRhYnNcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3RhYnMvdGFicy5tb2R1bGUjVGFic01vZHVsZVwiXG4gICAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywgeyBlbmFibGVUcmFjaW5nOiB0cnVlIH0pXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==