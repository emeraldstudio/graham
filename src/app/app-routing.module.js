"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// import { LoginComponent } from "./login/login.component";
var welcome_component_1 = require("./welcome/welcome.component");
// import { RegistroComponent } from "./registro/registro.component";
exports.COMPONENTS = [welcome_component_1.WelcomeComponent];
var routes = [
    { path: "", redirectTo: "/tabs/default", pathMatch: "full" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSw0REFBNEQ7QUFDNUQsaUVBQStEO0FBQy9ELHFFQUFxRTtBQUV4RCxRQUFBLFVBQVUsR0FBRyxDQUFFLG9DQUFnQixDQUFDLENBQUM7QUFFOUMsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUM1RDtRQUNJLDJDQUEyQztRQUMzQyxJQUFJLEVBQUUsT0FBTztRQUNiLFlBQVksRUFBRSxzQ0FBc0M7S0FDdkQ7SUFDRDtRQUNJLElBQUksRUFBRSxTQUFTO1FBQ2YsU0FBUyxFQUFFLG9DQUFnQjtLQUM5QjtJQUNEO1FBQ0ksaURBQWlEO1FBQ2pELElBQUksRUFBRSxVQUFVO1FBQ2hCLFlBQVksRUFBRSwrQ0FBK0M7S0FDaEU7SUFDRDtRQUNJLElBQUksRUFBRSxNQUFNO1FBQ1osWUFBWSxFQUFFLG1DQUFtQztLQUNwRDtJQUNEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixZQUFZLEVBQUUsbUNBQW1DO0tBQ3BEO0NBQ0osQ0FBQztBQU9GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFMNUIsZUFBUSxDQUFDO1lBQ04sZ0ZBQWdGO1lBQ2hGLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuLy8gaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFdlbGNvbWVDb21wb25lbnQgfSBmcm9tIFwiLi93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50XCI7XG4vLyBpbXBvcnQgeyBSZWdpc3Ryb0NvbXBvbmVudCB9IGZyb20gXCIuL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudFwiO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UUyA9IFsgV2VsY29tZUNvbXBvbmVudF07XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvdGFicy9kZWZhdWx0XCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7XG4gICAgICAgIC8vIHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudFxuICAgICAgICBwYXRoOiBcImxvZ2luXCIsIFxuICAgICAgICBsb2FkQ2hpbGRyZW46IFwifi9hcHAvbG9naW4vbG9naW4ubW9kdWxlI0xvZ2luTW9kdWxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJ3ZWxjb21lXCIsIFxuICAgICAgICBjb21wb25lbnQ6IFdlbGNvbWVDb21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgLy8gcGF0aDogXCJyZWdpc3Ryb1wiLCBjb21wb25lbnQ6IFJlZ2lzdHJvQ29tcG9uZW50XG4gICAgICAgIHBhdGg6IFwicmVnaXN0cm9cIiwgXG4gICAgICAgIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9yZWdpc3Ryby9yZWdpc3Ryby5tb2R1bGUjUmVnaXN0cm9Nb2R1bGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcInRhYnNcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3RhYnMvdGFicy5tb2R1bGUjVGFic01vZHVsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiY2hhdFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IFwifi9hcHAvY2hhdC9jaGF0Lm1vZHVsZSNDaGF0TW9kdWxlXCJcbiAgICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICAvLyBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7IGVuYWJsZVRyYWNpbmc6IHRydWUgfSldLFxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==