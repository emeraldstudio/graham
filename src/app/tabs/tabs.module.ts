import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";

import { TabsRoutingModule } from "./tabs-routing.module";
import { TabsComponent } from "./tabs.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TabsRoutingModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            {
                path: "default", component: TabsComponent, children: [
                    {
                        path: "home",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/home/home.module#HomeModule",
                        outlet: "homeTab"
                    },
                    {
                        path: "browse",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/browse/browse.module#BrowseModule",
                        outlet: "browseTab"
                    },
                    {
                        path: "search",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/search/search.module#SearchModule",
                        outlet: "searchTab"
                    }
                ]
            }
        ])        
    ],
    declarations: [
        TabsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }
