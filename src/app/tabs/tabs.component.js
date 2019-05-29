"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var TabsComponent = /** @class */ (function () {
    function TabsComponent(routerExtension, activeRoute) {
        this.routerExtension = routerExtension;
        this.activeRoute = activeRoute;
    }
    TabsComponent.prototype.ngOnInit = function () {
        // this.routerExtension.navigate([{ outlets: { playerTab: ["players"], teamTab: ["teams"], llamarTab: ["llamar"] } }], { relativeTo: this.activeRoute });
        this.routerExtension.navigate([{ outlets: { chatsTab: ["chats"], contactoTab: ["contacto"], llamarTab: ["llamar"], configuracionTab: ["configuracion"] } }], { relativeTo: this.activeRoute });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxzREFBK0Q7QUFDL0QsMENBQWlEO0FBT2pEO0lBQ0ksdUJBQW9CLGVBQWlDLEVBQVUsV0FBMkI7UUFBdEUsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO0lBQzFGLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0kseUpBQXlKO1FBQ3pKLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ25NLENBQUM7SUFQUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUV1Qyx5QkFBZ0IsRUFBdUIsdUJBQWM7T0FEakYsYUFBYSxDQVF6QjtJQUFELG9CQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRhYnMtcGFnZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGFicy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGFjdGl2ZVJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyB0aGlzLnJvdXRlckV4dGVuc2lvbi5uYXZpZ2F0ZShbeyBvdXRsZXRzOiB7IHBsYXllclRhYjogW1wicGxheWVyc1wiXSwgdGVhbVRhYjogW1widGVhbXNcIl0sIGxsYW1hclRhYjogW1wibGxhbWFyXCJdIH0gfV0sIHsgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmVSb3V0ZSB9KTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoW3sgb3V0bGV0czogeyBjaGF0c1RhYjogW1wiY2hhdHNcIl0sIGNvbnRhY3RvVGFiOiBbXCJjb250YWN0b1wiXSwgbGxhbWFyVGFiOiBbXCJsbGFtYXJcIl0sIGNvbmZpZ3VyYWNpb25UYWI6IFtcImNvbmZpZ3VyYWNpb25cIl0gfSB9XSwgeyByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2ZVJvdXRlIH0pO1xuICAgIH1cbn1cbiJdfQ==