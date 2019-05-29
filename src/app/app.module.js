"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var data_service_1 = require("./data.service");
var trace_1 = require("tns-core-modules/trace");
trace_1.enable();
var MyErrorHandler = /** @class */ (function () {
    function MyErrorHandler() {
    }
    MyErrorHandler.prototype.handleError = function (error) {
        console.log("### ErrorHandler Error: " + error.toString());
        console.log("### ErrorHandler Stack: " + error.stack);
    };
    return MyErrorHandler;
}());
exports.MyErrorHandler = MyErrorHandler;
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
            ],
            declarations: [
                app_component_1.AppComponent
            ].concat(app_routing_module_1.COMPONENTS),
            providers: [
                data_service_1.DataService,
                { provide: core_1.ErrorHandler, useClass: MyErrorHandler }
                // { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsZ0ZBQThFO0FBQzlFLDJEQUFvRTtBQUNwRSxpREFBK0M7QUFFL0MsK0NBQTZDO0FBRzdDLGdEQUE4RTtBQUU5RSxjQUFXLEVBQUUsQ0FBQztBQUVkO0lBQUE7SUFLQSxDQUFDO0lBSkcsb0NBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksd0NBQWM7QUErQjNCO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXhCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7YUFDbkI7WUFDRCxZQUFZO2dCQUNSLDRCQUFZO3FCQUNULCtCQUFVLENBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBCQUFXO2dCQUNYLEVBQUUsT0FBTyxFQUFFLG1CQUFZLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtnQkFDbkQsc0VBQXNFO2FBQ3pFO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BLCBFcnJvckhhbmRsZXIsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSwgQ09NUE9ORU5UUyB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuL2RhdGEuc2VydmljZVwiO1xuaW1wb3J0IHsgTlNNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBlbmFibGUgYXMgdHJhY2VFbmFibGUsIGFkZENhdGVnb3JpZXMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90cmFjZVwiO1xuXG50cmFjZUVuYWJsZSgpO1xuXG5leHBvcnQgY2xhc3MgTXlFcnJvckhhbmRsZXIgaW1wbGVtZW50cyBFcnJvckhhbmRsZXIge1xuICAgIGhhbmRsZUVycm9yKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIEVycm9ySGFuZGxlciBFcnJvcjogXCIgKyBlcnJvci50b1N0cmluZygpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMgRXJyb3JIYW5kbGVyIFN0YWNrOiBcIiArIGVycm9yLnN0YWNrKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICAuLi5DT01QT05FTlRTXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRGF0YVNlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogRXJyb3JIYW5kbGVyLCB1c2VDbGFzczogTXlFcnJvckhhbmRsZXIgfVxuICAgICAgICAvLyB7IHByb3ZpZGU6IE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgdXNlQ2xhc3M6IE5TTW9kdWxlRmFjdG9yeUxvYWRlciB9XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfSJdfQ==