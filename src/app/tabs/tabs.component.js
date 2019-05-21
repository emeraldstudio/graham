"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var platform_1 = require("tns-core-modules/platform");
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "tabs", loadChildren: "./tabs/tabs.module#TabsModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
var TabsComponent = /** @class */ (function () {
    function TabsComponent(routerExtension, activeRoute) {
        this.routerExtension = routerExtension;
        this.activeRoute = activeRoute;
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }
    TabsComponent.prototype.ngOnInit = function () {
        this.routerExtension.navigate([{ outlets: { homeTab: ["home"], browseTab: ["browse"], searchTab: ["search"] } }], { relativeTo: this.activeRoute });
    };
    TabsComponent.prototype.getIconSource = function (icon) {
        var iconPrefix = platform_1.isAndroid ? "res://" : "res://tabIcons/";
        return iconPrefix + icon;
    };
    TabsComponent = __decorate([
        core_1.Component({
            selector: "Tabs",
            moduleId: module.id,
            templateUrl: "./tabs.component.html"
        })
        // export class TabsComponent{
        ,
        __metadata("design:paramtypes", [router_1.RouterExtensions, router_2.ActivatedRoute])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsMENBQWlEO0FBQ2pELHNEQUFzRDtBQUN0RDs7Ozs7OERBSzhEO0FBUTlEO0lBQ0ksdUJBQW9CLGVBQWlDLEVBQVMsV0FBMkI7UUFBckUsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQ3JGOztzRUFFOEQ7SUFDbEUsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQzNHLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FDbkMsQ0FBQztJQUNOLENBQUM7SUFFRCxxQ0FBYSxHQUFiLFVBQWMsSUFBWTtRQUN0QixJQUFNLFVBQVUsR0FBRyxvQkFBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1FBRTVELE9BQU8sVUFBVSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBakJRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7UUFDRiw4QkFBOEI7O3lDQUVXLHlCQUFnQixFQUFzQix1QkFBYztPQURoRixhQUFhLENBa0J6QjtJQUFELG9CQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogQmVmb3JlIHlvdSBjYW4gbmF2aWdhdGUgdG8gdGhpcyBwYWdlIGZyb20geW91ciBhcHAsIHlvdSBuZWVkIHRvIHJlZmVyZW5jZSB0aGlzIHBhZ2UncyBtb2R1bGUgaW4gdGhlXG4qIGdsb2JhbCBhcHAgcm91dGVyIG1vZHVsZS4gQWRkIHRoZSBmb2xsb3dpbmcgb2JqZWN0IHRvIHRoZSBnbG9iYWwgYXJyYXkgb2Ygcm91dGVzOlxuKiB7IHBhdGg6IFwidGFic1wiLCBsb2FkQ2hpbGRyZW46IFwiLi90YWJzL3RhYnMubW9kdWxlI1RhYnNNb2R1bGVcIiB9XG4qIE5vdGUgdGhhdCB0aGlzIHNpbXBseSBwb2ludHMgdGhlIHBhdGggdG8gdGhlIHBhZ2UgbW9kdWxlIGZpbGUuIElmIHlvdSBtb3ZlIHRoZSBwYWdlLCB5b3UgbmVlZCB0byB1cGRhdGUgdGhlIHJvdXRlIHRvby5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlRhYnNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGFicy5jb21wb25lbnQuaHRtbFwiXG59KVxuLy8gZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnR7XG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMscHJpdmF0ZSBhY3RpdmVSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBhcHAgc2VydmljZXMgdGhhdCB5b3UgbmVlZCBpbiB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoW3sgb3V0bGV0czogeyBob21lVGFiOiBbXCJob21lXCJdLCBicm93c2VUYWI6IFtcImJyb3dzZVwiXSwgc2VhcmNoVGFiOltcInNlYXJjaFwiXSB9IH1dLCBcbiAgICAgICAgICAgIHsgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmVSb3V0ZSB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0SWNvblNvdXJjZShpY29uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBpY29uUHJlZml4ID0gaXNBbmRyb2lkID8gXCJyZXM6Ly9cIiA6IFwicmVzOi8vdGFiSWNvbnMvXCI7XG5cbiAgICAgICAgcmV0dXJuIGljb25QcmVmaXggKyBpY29uO1xuICAgIH1cbn1cbiJdfQ==