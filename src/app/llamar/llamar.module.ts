import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { LlamarRoutingModule } from "./llamar-routing.module";
import { LlamarComponent } from "./llamar.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        LlamarRoutingModule
    ],
    declarations: [
        LlamarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LlamarModule { }
