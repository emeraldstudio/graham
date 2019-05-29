import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TabsComponent } from "./tabs.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            {
                path: "default", component: TabsComponent, children: [
                    {
                        path: "chats",
                        outlet: "chatsTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/chats/chats.module#ChatsModule"
                    },
                    {
                        path: "llamar",
                        outlet: "llamarTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/llamar/llamar.module#LlamarModule"
                    },
                    {
                        path: "contacto",
                        outlet: "contactoTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/contacto/contacto.module#ContactoModule",
                    },
                    {
                        path: "configuracion",
                        outlet: "configuracionTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/configuracion/configuracion.module#ConfiguracionModule"
                    }
                ]
            }
        ])
    ],
    declarations: [
        TabsComponent
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule { }