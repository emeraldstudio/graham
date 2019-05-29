"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
// import { NativeScriptRouterModule } from "nativescript-angular/router";
var chats_routing_module_1 = require("./chats-routing.module");
var chats_component_1 = require("./chats.component");
var ChatsModule = /** @class */ (function () {
    function ChatsModule() {
    }
    ChatsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                chats_routing_module_1.ChatsRoutingModule
                // NativeScriptRouterModule,
                // NativeScriptRouterModule.forChild([
                //     { path: "", redirectTo: "chats" },
                //     { path: "chats", component: ChatsComponent }
                // ])
            ],
            declarations: [
                chats_component_1.ChatsComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ChatsModule);
    return ChatsModule;
}());
exports.ChatsModule = ChatsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSwwRUFBMEU7QUFFMUUsK0RBQTREO0FBQzVELHFEQUFtRDtBQW1CbkQ7SUFBQTtJQUEyQixDQUFDO0lBQWYsV0FBVztRQWpCdkIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIseUNBQWtCO2dCQUNsQiw0QkFBNEI7Z0JBQzVCLHNDQUFzQztnQkFDdEMseUNBQXlDO2dCQUN6QyxtREFBbUQ7Z0JBQ25ELEtBQUs7YUFDUjtZQUNELFlBQVksRUFBRTtnQkFDVixnQ0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csV0FBVyxDQUFJO0lBQUQsa0JBQUM7Q0FBQSxBQUE1QixJQUE0QjtBQUFmLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBDaGF0c1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9jaGF0cy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ2hhdHNDb21wb25lbnQgfSBmcm9tIFwiLi9jaGF0cy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgQ2hhdHNSb3V0aW5nTW9kdWxlXG4gICAgICAgIC8vIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgLy8gTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgICAgLy8gICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCJjaGF0c1wiIH0sXG4gICAgICAgIC8vICAgICB7IHBhdGg6IFwiY2hhdHNcIiwgY29tcG9uZW50OiBDaGF0c0NvbXBvbmVudCB9XG4gICAgICAgIC8vIF0pXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ2hhdHNDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdHNNb2R1bGUgeyB9XG4iXX0=