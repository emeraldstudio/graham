"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var data_service_1 = require("../data.service");
var TeamDetailComponent = /** @class */ (function () {
    function TeamDetailComponent(data, route, routerExtension, activeRoute) {
        this.data = data;
        this.route = route;
        this.routerExtension = routerExtension;
        this.activeRoute = activeRoute;
    }
    TeamDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.item = _this.data.getTeam(id);
        });
    };
    TeamDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TeamDetailComponent.prototype.backTeams = function () {
        this.routerExtension.back({ relativeTo: this.activeRoute });
    };
    TeamDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-team-details",
            moduleId: module.id,
            templateUrl: "./team-detail.component.html",
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            router_1.ActivatedRoute])
    ], TeamDetailComponent);
    return TeamDetailComponent;
}());
exports.TeamDetailComponent = TeamDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVhbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFDL0QsZ0RBQXdEO0FBUXhEO0lBSUksNkJBQ1ksSUFBaUIsRUFDakIsS0FBcUIsRUFDckIsZUFBaUMsRUFDakMsV0FBMkI7UUFIM0IsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakMsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO0lBQ25DLENBQUM7SUFFTCxzQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbEQsSUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsdUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUF4QlEsbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7eUNBTW9CLDBCQUFXO1lBQ1YsdUJBQWM7WUFDSix5QkFBZ0I7WUFDcEIsdUJBQWM7T0FSOUIsbUJBQW1CLENBeUIvQjtJQUFELDBCQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6Qlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UsIERhdGFJdGVtIH0gZnJvbSBcIi4uL2RhdGEuc2VydmljZVwiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtdGVhbS1kZXRhaWxzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RlYW0tZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFRlYW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW06IERhdGFJdGVtO1xuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uOyAgICBcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGRhdGE6IERhdGFTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgYWN0aXZlUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gK3BhcmFtc1tcImlkXCJdO1xuICAgICAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5kYXRhLmdldFRlYW0oaWQpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGJhY2tUZWFtcygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24uYmFjayh7IHJlbGF0aXZlVG86IHRoaXMuYWN0aXZlUm91dGUgfSk7XG4gICAgfVxufSJdfQ==