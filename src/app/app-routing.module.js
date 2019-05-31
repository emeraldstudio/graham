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
        path: "login",
        loadChildren: "~/app/login/login.module#LoginModule"
    },
    {
        path: "welcome",
        component: welcome_component_1.WelcomeComponent
    },
    {
        // path: "registro", component: RegistroComponent
        path: "registro",
        loadChildren: "~/app/registro/registro.module#RegistroModule"
    },
    {
        path: "tabs",
        loadChildren: "~/app/tabs/tabs.module#TabsModule"
    },
    {
        path: "chat",
        loadChildren: "~/app/chat/chat.module#ChatModule"
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            // imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSw0REFBNEQ7QUFDNUQsaUVBQStEO0FBQy9ELHFFQUFxRTtBQUV4RCxRQUFBLFVBQVUsR0FBRyxDQUFFLG9DQUFnQixDQUFDLENBQUM7QUFFOUMsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN2RDtRQUNJLDJDQUEyQztRQUMzQyxJQUFJLEVBQUUsT0FBTztRQUNiLFlBQVksRUFBRSxzQ0FBc0M7S0FDdkQ7SUFDRDtRQUNJLElBQUksRUFBRSxTQUFTO1FBQ2YsU0FBUyxFQUFFLG9DQUFnQjtLQUM5QjtJQUNEO1FBQ0ksaURBQWlEO1FBQ2pELElBQUksRUFBRSxVQUFVO1FBQ2hCLFlBQVksRUFBRSwrQ0FBK0M7S0FDaEU7SUFDRDtRQUNJLElBQUksRUFBRSxNQUFNO1FBQ1osWUFBWSxFQUFFLG1DQUFtQztLQUNwRDtJQUNEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixZQUFZLEVBQUUsbUNBQW1DO0tBQ3BEO0NBQ0osQ0FBQztBQU9GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFMNUIsZUFBUSxDQUFDO1lBQ04sZ0ZBQWdGO1lBQ2hGLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuLy8gaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFdlbGNvbWVDb21wb25lbnQgfSBmcm9tIFwiLi93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50XCI7XG4vLyBpbXBvcnQgeyBSZWdpc3Ryb0NvbXBvbmVudCB9IGZyb20gXCIuL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudFwiO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UUyA9IFsgV2VsY29tZUNvbXBvbmVudF07XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvd2VsY29tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAge1xuICAgICAgICAvLyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnRcbiAgICAgICAgcGF0aDogXCJsb2dpblwiLCBcbiAgICAgICAgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2xvZ2luL2xvZ2luLm1vZHVsZSNMb2dpbk1vZHVsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwid2VsY29tZVwiLCBcbiAgICAgICAgY29tcG9uZW50OiBXZWxjb21lQ29tcG9uZW50XG4gICAgfSxcbiAgICB7XG4gICAgICAgIC8vIHBhdGg6IFwicmVnaXN0cm9cIiwgY29tcG9uZW50OiBSZWdpc3Ryb0NvbXBvbmVudFxuICAgICAgICBwYXRoOiBcInJlZ2lzdHJvXCIsIFxuICAgICAgICBsb2FkQ2hpbGRyZW46IFwifi9hcHAvcmVnaXN0cm8vcmVnaXN0cm8ubW9kdWxlI1JlZ2lzdHJvTW9kdWxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJ0YWJzXCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC90YWJzL3RhYnMubW9kdWxlI1RhYnNNb2R1bGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcImNoYXRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2NoYXQvY2hhdC5tb2R1bGUjQ2hhdE1vZHVsZVwiXG4gICAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgLy8gaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywgeyBlbmFibGVUcmFjaW5nOiB0cnVlIH0pXSxcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=