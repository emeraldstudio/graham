"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var configuracion_routing_module_1 = require("./configuracion-routing.module");
var configuracion_component_1 = require("./configuracion.component");
var ConfiguracionModule = /** @class */ (function () {
    function ConfiguracionModule() {
    }
    ConfiguracionModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                configuracion_routing_module_1.ConfiguracionRoutingModule
            ],
            declarations: [
                configuracion_component_1.ConfiguracionComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ConfiguracionModule);
    return ConfiguracionModule;
}());
exports.ConfiguracionModule = ConfiguracionModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhY2lvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWd1cmFjaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsK0VBQTRFO0FBQzVFLHFFQUFtRTtBQWNuRTtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBWi9CLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHlEQUEwQjthQUM3QjtZQUNELFlBQVksRUFBRTtnQkFDVixnREFBc0I7YUFDekI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLG1CQUFtQixDQUFJO0lBQUQsMEJBQUM7Q0FBQSxBQUFwQyxJQUFvQztBQUF2QixrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IENvbmZpZ3VyYWNpb25Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vY29uZmlndXJhY2lvbi1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ29uZmlndXJhY2lvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbmZpZ3VyYWNpb24uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIENvbmZpZ3VyYWNpb25Sb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ29uZmlndXJhY2lvbkNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb25maWd1cmFjaW9uTW9kdWxlIHsgfVxuIl19