import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

// import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
// import { RegistroComponent } from "./registro/registro.component";

export const COMPONENTS = [ WelcomeComponent];

const routes: Routes = [
    { path: "", redirectTo: "/tabs/default", pathMatch: "full" },
    {
        // path: "login", component: LoginComponent
        path: "login", 
        loadChildren: "~/app/login/login.module#LoginModule"
    },
    {
        path: "welcome", 
        component: WelcomeComponent
    },
    {
        // path: "registro", component: RegistroComponent
        path: "registro", 
        loadChildren: "~/app/registro/registro.module#RegistroModule"
    },
    {
        path: "tabs",
        loadChildren: "~/app/tabs/tabs.module#TabsModule"
    },
    {
        path: "chat",
        loadChildren: "~/app/chat/chat.module#ChatModule"
    },
];

@NgModule({
    // imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
