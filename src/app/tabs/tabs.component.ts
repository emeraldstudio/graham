import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { isAndroid } from "tns-core-modules/platform";
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "tabs", loadChildren: "./tabs/tabs.module#TabsModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Tabs",
    moduleId: module.id,
    templateUrl: "./tabs.component.html"
})
// export class TabsComponent{
export class TabsComponent implements OnInit {
    constructor(private routerExtension: RouterExtensions,private activeRoute: ActivatedRoute) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        this.routerExtension.navigate([{ outlets: { homeTab: ["home"], browseTab: ["browse"], searchTab:["search"] } }], 
            { relativeTo: this.activeRoute }
        );
    }

    getIconSource(icon: string): string {
        const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

        return iconPrefix + icon;
    }
}
