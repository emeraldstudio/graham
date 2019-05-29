import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ConfiguracionRoutingModule } from "./configuracion-routing.module";
import { ConfiguracionComponent } from "./configuracion.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ConfiguracionRoutingModule
    ],
    declarations: [
        ConfiguracionComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ConfiguracionModule { }
