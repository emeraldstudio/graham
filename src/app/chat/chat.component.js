"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var router_1 = require("nativescript-angular/router");
var observableArray = require("tns-core-modules/data/observable-array");
var router_2 = require("@angular/router");
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "chat", loadChildren: "./chat/chat.module#ChatModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
var ChatComponent = /** @class */ (function () {
    function ChatComponent(routerExtensions, route) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.route = route;
        this.mensajes = new observableArray.ObservableArray([]);
        this.proveedoresTokens = [];
        this.route.queryParams.subscribe(function (params) {
            console.log('Parametros de url');
            console.log(JSON.stringify(params));
            _this.imagen = params["imagen"];
            _this.nombre = params["nombre"];
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    };
    ChatComponent.prototype.irAtras = function () {
        this.routerExtensions.back();
    };
    __decorate([
        core_1.ViewChild("listview"),
        __metadata("design:type", core_1.ElementRef)
    ], ChatComponent.prototype, "listViewElem", void 0);
    ChatComponent = __decorate([
        core_1.Component({
            selector: "Chat",
            moduleId: module.id,
            templateUrl: "./chat.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, router_2.ActivatedRoute])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxzREFBNkQ7QUFFN0Qsd0VBQTBFO0FBQzFFLDBDQUFpRDtBQUVqRDs7Ozs7OERBSzhEO0FBTzlEO0lBV0ksdUJBQW9CLGdCQUFrQyxFQUFTLEtBQXFCO1FBQXBGLGlCQVNDO1FBVG1CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVBwRixhQUFRLEdBQUMsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBSWpELHNCQUFpQixHQUFDLEVBQUUsQ0FBQztRQU1qQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0k7O3NFQUU4RDtJQUNsRSxDQUFDO0lBQ0QsK0JBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBNUJzQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBZSxpQkFBVTt1REFBQztJQUR2QyxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQVl3Qyx5QkFBZ0IsRUFBZ0IsdUJBQWM7T0FYM0UsYUFBYSxDQThCekI7SUFBRCxvQkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCxFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEZlZWRiYWNrLCBGZWVkYmFja1R5cGUsIEZlZWRiYWNrUG9zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZlZWRiYWNrXCI7XG5pbXBvcnQgKiBhcyBvYnNlcnZhYmxlQXJyYXkgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogQmVmb3JlIHlvdSBjYW4gbmF2aWdhdGUgdG8gdGhpcyBwYWdlIGZyb20geW91ciBhcHAsIHlvdSBuZWVkIHRvIHJlZmVyZW5jZSB0aGlzIHBhZ2UncyBtb2R1bGUgaW4gdGhlXG4qIGdsb2JhbCBhcHAgcm91dGVyIG1vZHVsZS4gQWRkIHRoZSBmb2xsb3dpbmcgb2JqZWN0IHRvIHRoZSBnbG9iYWwgYXJyYXkgb2Ygcm91dGVzOlxuKiB7IHBhdGg6IFwiY2hhdFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jaGF0L2NoYXQubW9kdWxlI0NoYXRNb2R1bGVcIiB9XG4qIE5vdGUgdGhhdCB0aGlzIHNpbXBseSBwb2ludHMgdGhlIHBhdGggdG8gdGhlIHBhZ2UgbW9kdWxlIGZpbGUuIElmIHlvdSBtb3ZlIHRoZSBwYWdlLCB5b3UgbmVlZCB0byB1cGRhdGUgdGhlIHJvdXRlIHRvby5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkNoYXRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY2hhdC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIENoYXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBWaWV3Q2hpbGQoXCJsaXN0dmlld1wiKSBsaXN0Vmlld0VsZW06IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBmZWVkYmFjazogRmVlZGJhY2s7XG4gICAgbWVuc2FqZTpzdHJpbmc7XG4gICAgbWVuc2FqZXM9bmV3IG9ic2VydmFibGVBcnJheS5PYnNlcnZhYmxlQXJyYXkoW10pO1xuICAgIHJlbWl0ZW50ZTpzdHJpbmc7XG4gICAgZGVzdGluYXRhcmlvOnN0cmluZztcbiAgICBpZE1lbnNhamU6c3RyaW5nO1xuICAgIHByb3ZlZWRvcmVzVG9rZW5zPVtdO1xuICAgIG5vbWJyZTpzdHJpbmc7XG4gICAgaW1hZ2VuOnN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMscHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcblxuXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHsgXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXJhbWV0cm9zIGRlIHVybCcpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcbiAgICAgICAgICAgICAgdGhpcy5pbWFnZW4gPSBwYXJhbXNbXCJpbWFnZW5cIl07XG4gICAgICAgICAgICAgIHRoaXMubm9tYnJlID0gcGFyYW1zW1wibm9tYnJlXCJdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfVxuICAgIGlyQXRyYXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfSAgIFxufVxuIl19