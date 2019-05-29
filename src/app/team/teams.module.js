"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var teams_component_1 = require("./teams.component");
var team_detail_component_1 = require("./team-detail.component");
var common_1 = require("nativescript-angular/common");
var TeamsModule = /** @class */ (function () {
    function TeamsModule() {
    }
    TeamsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: "", redirectTo: "teams" },
                    { path: "teams", component: teams_component_1.TeamsComponent },
                    { path: "team/:id", component: team_detail_component_1.TeamDetailComponent },
                ])
            ],
            declarations: [
                teams_component_1.TeamsComponent,
                team_detail_component_1.TeamDetailComponent,
            ],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], TeamsModule);
    return TeamsModule;
}());
exports.TeamsModule = TeamsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVhbXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxxREFBbUQ7QUFDbkQsaUVBQThEO0FBQzlELHNEQUF1RTtBQW9CdkU7SUFBQTtJQUEyQixDQUFDO0lBQWYsV0FBVztRQWxCdkIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxRQUFRLENBQUM7b0JBQzlCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFO29CQUNqQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7b0JBQzVDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7aUJBQ3ZELENBQUM7YUFDTDtZQUNELFlBQVksRUFBRTtnQkFDVixnQ0FBYztnQkFDZCwyQ0FBbUI7YUFDdEI7WUFDRCxTQUFTLEVBQUUsRUFDVjtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUFBLEFBQTVCLElBQTRCO0FBQWYsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFRlYW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vdGVhbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUZWFtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vdGVhbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgICAgICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCJ0ZWFtc1wiIH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwidGVhbXNcIiwgY29tcG9uZW50OiBUZWFtc0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcInRlYW0vOmlkXCIsIGNvbXBvbmVudDogVGVhbURldGFpbENvbXBvbmVudCB9LFxuICAgICAgICBdKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFRlYW1zQ29tcG9uZW50LFxuICAgICAgICBUZWFtRGV0YWlsQ29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgVGVhbXNNb2R1bGUgeyB9XG4iXX0=