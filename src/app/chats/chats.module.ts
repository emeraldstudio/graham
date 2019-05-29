import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
// import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ChatsRoutingModule } from "./chats-routing.module";
import { ChatsComponent } from "./chats.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ChatsRoutingModule
        // NativeScriptRouterModule,
        // NativeScriptRouterModule.forChild([
        //     { path: "", redirectTo: "chats" },
        //     { path: "chats", component: ChatsComponent }
        // ])
    ],
    declarations: [
        ChatsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ChatsModule { }
