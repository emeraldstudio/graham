"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var players_component_1 = require("./players.component");
var player_detail_component_1 = require("./player-detail.component");
var common_1 = require("nativescript-angular/common");
var PlayersModule = /** @class */ (function () {
    function PlayersModule() {
    }
    PlayersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: "", redirectTo: "players" },
                    { path: "players", component: players_component_1.PlayerComponent },
                    { path: "player/:id", component: player_detail_component_1.PlayerDetailComponent },
                ])
            ],
            declarations: [
                players_component_1.PlayerComponent,
                player_detail_component_1.PlayerDetailComponent,
            ],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], PlayersModule);
    return PlayersModule;
}());
exports.PlayersModule = PlayersModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUseURBQXNEO0FBQ3RELHFFQUFrRTtBQUNsRSxzREFBdUU7QUFvQnZFO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBbEJ6QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLFFBQVEsQ0FBQztvQkFDOUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7b0JBQ25DLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsbUNBQWUsRUFBRTtvQkFDL0MsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwrQ0FBcUIsRUFBQztpQkFDMUQsQ0FBQzthQUNMO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG1DQUFlO2dCQUNmLCtDQUFxQjthQUN4QjtZQUNELFNBQVMsRUFBRSxFQUNWO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQUEsQUFBOUIsSUFBOEI7QUFBakIsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBsYXllckNvbXBvbmVudCB9IGZyb20gXCIuL3BsYXllcnMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQbGF5ZXJEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9wbGF5ZXItZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICAgICAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwicGxheWVyc1wiIH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwicGxheWVyc1wiLCBjb21wb25lbnQ6IFBsYXllckNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcInBsYXllci86aWRcIiwgY29tcG9uZW50OiBQbGF5ZXJEZXRhaWxDb21wb25lbnR9LFxuICAgICAgICBdKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFBsYXllckNvbXBvbmVudCxcbiAgICAgICAgUGxheWVyRGV0YWlsQ29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgUGxheWVyc01vZHVsZSB7IH1cbiJdfQ==