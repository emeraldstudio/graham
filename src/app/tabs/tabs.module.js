"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var tabs_routing_module_1 = require("./tabs-routing.module");
var tabs_component_1 = require("./tabs.component");
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                tabs_routing_module_1.TabsRoutingModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forChild([
                    {
                        path: "default", component: tabs_component_1.TabsComponent, children: [
                            {
                                path: "home",
                                component: router_1.NSEmptyOutletComponent,
                                loadChildren: "~/app/home/home.module#HomeModule",
                                outlet: "homeTab"
                            },
                            {
                                path: "browse",
                                component: router_1.NSEmptyOutletComponent,
                                loadChildren: "~/app/browse/browse.module#BrowseModule",
                                outlet: "browseTab"
                            },
                            {
                                path: "search",
                                component: router_1.NSEmptyOutletComponent,
                                loadChildren: "~/app/search/search.module#SearchModule",
                                outlet: "searchTab"
                            }
                        ]
                    }
                ])
            ],
            declarations: [
                tabs_component_1.TabsComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], TabsModule);
    return TabsModule;
}());
exports.TabsModule = TabsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsc0RBQStGO0FBRS9GLDZEQUEwRDtBQUMxRCxtREFBaUQ7QUF1Q2pEO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFyQ3RCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHVDQUFpQjtnQkFDakIsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxRQUFRLENBQUM7b0JBQzlCO3dCQUNJLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsUUFBUSxFQUFFOzRCQUNqRDtnQ0FDSSxJQUFJLEVBQUUsTUFBTTtnQ0FDWixTQUFTLEVBQUUsK0JBQXNCO2dDQUNqQyxZQUFZLEVBQUUsbUNBQW1DO2dDQUNqRCxNQUFNLEVBQUUsU0FBUzs2QkFDcEI7NEJBQ0Q7Z0NBQ0ksSUFBSSxFQUFFLFFBQVE7Z0NBQ2QsU0FBUyxFQUFFLCtCQUFzQjtnQ0FDakMsWUFBWSxFQUFFLHlDQUF5QztnQ0FDdkQsTUFBTSxFQUFFLFdBQVc7NkJBQ3RCOzRCQUNEO2dDQUNJLElBQUksRUFBRSxRQUFRO2dDQUNkLFNBQVMsRUFBRSwrQkFBc0I7Z0NBQ2pDLFlBQVksRUFBRSx5Q0FBeUM7Z0NBQ3ZELE1BQU0sRUFBRSxXQUFXOzZCQUN0Qjt5QkFDSjtxQkFDSjtpQkFDSixDQUFDO2FBQ0w7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSwgTlNFbXB0eU91dGxldENvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgVGFic1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi90YWJzLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgVGFic1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcImRlZmF1bHRcIiwgY29tcG9uZW50OiBUYWJzQ29tcG9uZW50LCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcImhvbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTlNFbXB0eU91dGxldENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxldDogXCJob21lVGFiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCJicm93c2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTlNFbXB0eU91dGxldENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9icm93c2UvYnJvd3NlLm1vZHVsZSNCcm93c2VNb2R1bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxldDogXCJicm93c2VUYWJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBOU0VtcHR5T3V0bGV0Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3NlYXJjaC9zZWFyY2gubW9kdWxlI1NlYXJjaE1vZHVsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGV0OiBcInNlYXJjaFRhYlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0pICAgICAgICBcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBUYWJzQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNNb2R1bGUgeyB9XG4iXX0=