"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var common_1 = require("nativescript-angular/common");
var tabs_component_1 = require("./tabs.component");
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forChild([
                    {
                        path: "default", component: tabs_component_1.TabsComponent, children: [
                            {
                                path: "chats",
                                outlet: "chatsTab",
                                component: router_1.NSEmptyOutletComponent,
                                loadChildren: "~/app/chats/chats.module#ChatsModule"
                            },
                            // {
                            //     path: "llamar",
                            //     outlet: "llamarTab",
                            //     component: NSEmptyOutletComponent,
                            //     loadChildren: "~/app/llamar/llamar.module#LlamarModule"
                            // },
                            // {
                            //     path: "contacto",
                            //     outlet: "contactoTab",
                            //     component: NSEmptyOutletComponent,
                            //     loadChildren: "~/app/contacto/contacto.module#ContactoModule",
                            // },
                            {
                                path: "configuracion",
                                outlet: "configuracionTab",
                                component: router_1.NSEmptyOutletComponent,
                                loadChildren: "~/app/configuracion/configuracion.module#ConfiguracionModule"
                            }
                        ]
                    }
                ])
            ],
            declarations: [
                tabs_component_1.TabsComponent
            ],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], TabsModule);
    return TabsModule;
}());
exports.TabsModule = TabsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBK0Y7QUFDL0Ysc0RBQXVFO0FBRXZFLG1EQUFpRDtBQTRDakQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQTFDdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxRQUFRLENBQUM7b0JBQzlCO3dCQUNJLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsUUFBUSxFQUFFOzRCQUNqRDtnQ0FDSSxJQUFJLEVBQUUsT0FBTztnQ0FDYixNQUFNLEVBQUUsVUFBVTtnQ0FDbEIsU0FBUyxFQUFFLCtCQUFzQjtnQ0FDakMsWUFBWSxFQUFFLHNDQUFzQzs2QkFDdkQ7NEJBQ0QsSUFBSTs0QkFDSixzQkFBc0I7NEJBQ3RCLDJCQUEyQjs0QkFDM0IseUNBQXlDOzRCQUN6Qyw4REFBOEQ7NEJBQzlELEtBQUs7NEJBQ0wsSUFBSTs0QkFDSix3QkFBd0I7NEJBQ3hCLDZCQUE2Qjs0QkFDN0IseUNBQXlDOzRCQUN6QyxxRUFBcUU7NEJBQ3JFLEtBQUs7NEJBQ0w7Z0NBQ0ksSUFBSSxFQUFFLGVBQWU7Z0NBQ3JCLE1BQU0sRUFBRSxrQkFBa0I7Z0NBQzFCLFNBQVMsRUFBRSwrQkFBc0I7Z0NBQ2pDLFlBQVksRUFBRSw4REFBOEQ7NkJBQy9FO3lCQUNKO3FCQUNKO2lCQUNKLENBQUM7YUFDTDtZQUNELFlBQVksRUFBRTtnQkFDViw4QkFBYTthQUNoQjtZQUNELFNBQVMsRUFBRSxFQUNWO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSwgTlNFbXB0eU91dGxldENvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcImRlZmF1bHRcIiwgY29tcG9uZW50OiBUYWJzQ29tcG9uZW50LCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcImNoYXRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsZXQ6IFwiY2hhdHNUYWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTlNFbXB0eU91dGxldENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9jaGF0cy9jaGF0cy5tb2R1bGUjQ2hhdHNNb2R1bGVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBwYXRoOiBcImxsYW1hclwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3V0bGV0OiBcImxsYW1hclRhYlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29tcG9uZW50OiBOU0VtcHR5T3V0bGV0Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2xsYW1hci9sbGFtYXIubW9kdWxlI0xsYW1hck1vZHVsZVwiXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhdGg6IFwiY29udGFjdG9cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG91dGxldDogXCJjb250YWN0b1RhYlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29tcG9uZW50OiBOU0VtcHR5T3V0bGV0Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2NvbnRhY3RvL2NvbnRhY3RvLm1vZHVsZSNDb250YWN0b01vZHVsZVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBcImNvbmZpZ3VyYWNpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxldDogXCJjb25maWd1cmFjaW9uVGFiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IE5TRW1wdHlPdXRsZXRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkQ2hpbGRyZW46IFwifi9hcHAvY29uZmlndXJhY2lvbi9jb25maWd1cmFjaW9uLm1vZHVsZSNDb25maWd1cmFjaW9uTW9kdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSlcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBUYWJzQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzTW9kdWxlIHsgfSJdfQ==