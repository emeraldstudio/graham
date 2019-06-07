"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var platform_1 = require("tns-core-modules/platform");
var TabsComponent = /** @class */ (function () {
    function TabsComponent(routerExtension, activeRoute) {
        this.routerExtension = routerExtension;
        this.activeRoute = activeRoute;
    }
    TabsComponent.prototype.ngOnInit = function () {
        // this.routerExtension.navigate([{ outlets: { playerTab: ["players"], teamTab: ["teams"], llamarTab: ["llamar"] } }], { relativeTo: this.activeRoute });
        this.routerExtension.navigate([{ outlets: { chatsTab: ["chats"], configuracionTab: ["configuracion"] } }], { relativeTo: this.activeRoute });
    };
    TabsComponent.prototype.getIconSource = function (icon) {
        var iconPrefix = platform_1.isAndroid ? "res://" : "res://tabIcons/";
        return iconPrefix + icon;
    };
    TabsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "tabs-page",
            templateUrl: "./tabs.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, router_2.ActivatedRoute])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxzREFBK0Q7QUFDL0QsMENBQWlEO0FBQ2pELHNEQUFzRDtBQU90RDtJQUNJLHVCQUFvQixlQUFpQyxFQUFVLFdBQTJCO1FBQXRFLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtJQUMxRixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLHlKQUF5SjtRQUN6SixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNqSixDQUFDO0lBQ0QscUNBQWEsR0FBYixVQUFjLElBQVk7UUFDdEIsSUFBTSxVQUFVLEdBQUcsb0JBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUU1RCxPQUFPLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQVpRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBRXVDLHlCQUFnQixFQUF1Qix1QkFBYztPQURqRixhQUFhLENBYXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRhYnMtcGFnZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGFicy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGFjdGl2ZVJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyB0aGlzLnJvdXRlckV4dGVuc2lvbi5uYXZpZ2F0ZShbeyBvdXRsZXRzOiB7IHBsYXllclRhYjogW1wicGxheWVyc1wiXSwgdGVhbVRhYjogW1widGVhbXNcIl0sIGxsYW1hclRhYjogW1wibGxhbWFyXCJdIH0gfV0sIHsgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmVSb3V0ZSB9KTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoW3sgb3V0bGV0czogeyBjaGF0c1RhYjogW1wiY2hhdHNcIl0sIGNvbmZpZ3VyYWNpb25UYWI6IFtcImNvbmZpZ3VyYWNpb25cIl0gfSB9XSwgeyByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2ZVJvdXRlIH0pO1xuICAgIH1cbiAgICBnZXRJY29uU291cmNlKGljb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGljb25QcmVmaXggPSBpc0FuZHJvaWQgPyBcInJlczovL1wiIDogXCJyZXM6Ly90YWJJY29ucy9cIjtcblxuICAgICAgICByZXR1cm4gaWNvblByZWZpeCArIGljb247XG4gICAgfSAgICBcbn1cbiJdfQ==