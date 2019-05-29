"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(routerExtension) {
        this.routerExtension = routerExtension;
    }
    ;
    WelcomeComponent.prototype.onLogout = function () {
        // Navigate to login page with clearHistory
        this.routerExtension.navigate(["../login"], { clearHistory: true });
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "welcome-page",
            templateUrl: "./welcome.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWxjb21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxzREFBK0Q7QUFPL0Q7SUFDSSwwQkFBb0IsZUFBaUM7UUFBakMsb0JBQWUsR0FBZixlQUFlLENBQWtCO0lBQUksQ0FBQztJQUFBLENBQUM7SUFFM0QsbUNBQVEsR0FBUjtRQUNJLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQU5RLGdCQUFnQjtRQUw1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQzt5Q0FFdUMseUJBQWdCO09BRDVDLGdCQUFnQixDQU81QjtJQUFELHVCQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwid2VsY29tZS1wYWdlXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi93ZWxjb21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgV2VsY29tZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMpIHsgfTtcblxuICAgIG9uTG9nb3V0KCkge1xuICAgICAgICAvLyBOYXZpZ2F0ZSB0byBsb2dpbiBwYWdlIHdpdGggY2xlYXJIaXN0b3J5XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9uLm5hdmlnYXRlKFtcIi4uL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG59XG4iXX0=