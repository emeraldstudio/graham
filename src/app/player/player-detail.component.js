"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var data_service_1 = require("../data.service");
var PlayerDetailComponent = /** @class */ (function () {
    function PlayerDetailComponent(data, route, routerExtension, activeRoute) {
        this.data = data;
        this.route = route;
        this.routerExtension = routerExtension;
        this.activeRoute = activeRoute;
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.item = _this.data.getPlayer(id);
        });
    };
    PlayerDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PlayerDetailComponent.prototype.back = function () {
        this.routerExtension.back();
    };
    PlayerDetailComponent.prototype.backByOutlet = function () {
        this.routerExtension.back({ outlets: ["primary"] });
    };
    PlayerDetailComponent.prototype.backByParentRoute = function () {
        this.routerExtension.back({ relativeTo: this.activeRoute.parent });
    };
    PlayerDetailComponent.prototype.backByActivatedRoute = function () {
        this.routerExtension.back({ relativeTo: this.activeRoute });
    };
    PlayerDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-player-details",
            moduleId: module.id,
            templateUrl: "./player-detail.component.html",
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            router_1.ActivatedRoute])
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
}());
exports.PlayerDetailComponent = PlayerDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBQy9ELGdEQUF3RDtBQVF4RDtJQUlJLCtCQUNZLElBQWlCLEVBQ2pCLEtBQXFCLEVBQ3JCLGVBQWlDLEVBQ2pDLFdBQTJCO1FBSDNCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtJQUNuQyxDQUFDO0lBRUwsd0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2xELElBQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELG9DQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCw0Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELGlEQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsb0RBQW9CLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQXBDUSxxQkFBcUI7UUFMakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7U0FDaEQsQ0FBQzt5Q0FNb0IsMEJBQVc7WUFDVix1QkFBYztZQUNKLHlCQUFnQjtZQUNwQix1QkFBYztPQVI5QixxQkFBcUIsQ0FxQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSwgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1wbGF5ZXItZGV0YWlsc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wbGF5ZXItZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFBsYXllckRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbTogRGF0YUl0ZW07XG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBkYXRhOiBEYXRhU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGFjdGl2ZVJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICtwYXJhbXNbXCJpZFwiXTtcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuZGF0YS5nZXRQbGF5ZXIoaWQpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGJhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9uLmJhY2soKTtcbiAgICB9XG5cbiAgICBiYWNrQnlPdXRsZXQoKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9uLmJhY2soeyBvdXRsZXRzOiBbXCJwcmltYXJ5XCJdIH0pO1xuICAgIH1cblxuICAgIGJhY2tCeVBhcmVudFJvdXRlKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbi5iYWNrKHsgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmVSb3V0ZS5wYXJlbnQgfSk7XG4gICAgfVxuXG4gICAgYmFja0J5QWN0aXZhdGVkUm91dGUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9uLmJhY2soeyByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2ZVJvdXRlIH0pO1xuICAgIH1cbn1cbiJdfQ==