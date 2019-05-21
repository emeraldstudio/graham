import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NSModuleFactoryLoader } from "nativescript-angular/router";

// export class MyErrorHandler implements ErrorHandler {
//     handleError(error) {
//         console.log("### ErrorHandler Error: " + error.toString());
//         console.log("### ErrorHandler Stack: " + error.stack);
//     }
// }

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        // ...COMPONENTS
    ],
    // providers: [
    //     { provide: ErrorHandler, useClass: MyErrorHandler },
    //     { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    // ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
