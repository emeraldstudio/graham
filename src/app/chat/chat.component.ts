import { Component, OnInit, ViewChild,ElementRef } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");
import {RouterExtensions} from "nativescript-angular/router";
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import * as observableArray from "tns-core-modules/data/observable-array";
import { ActivatedRoute } from "@angular/router";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "chat", loadChildren: "./chat/chat.module#ChatModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Chat",
    moduleId: module.id,
    templateUrl: "./chat.component.html"
})
export class ChatComponent implements OnInit {
    @ViewChild("listview") listViewElem: ElementRef;
    private feedback: Feedback;
    mensaje:string;
    mensajes=new observableArray.ObservableArray([]);
    remitente:string;
    destinatario:string;
    idMensaje:string;
    proveedoresTokens=[];
    nombre:string;
    imagen:string;
    constructor(private routerExtensions: RouterExtensions,private route: ActivatedRoute) {


        this.route.queryParams.subscribe((params) => { 
              console.log('Parametros de url');
              console.log(JSON.stringify(params));
              this.imagen = params["imagen"];
              this.nombre = params["nombre"];
        });
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }
    irAtras(): void {
        this.routerExtensions.back();
    }   
}
