import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
const firebaseWebApi = require("nativescript-plugin-firebase/app");
const firebase = require("nativescript-plugin-firebase/app");
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import {LoadingIndicator} from "nativescript-loading-indicator";
import * as dialogs from "tns-core-modules/ui/dialogs";
let loader = new LoadingIndicator();

import { AddEventListenerResult, User } from "nativescript-plugin-firebase";

@Component({
    selector: "Registro",
    moduleId: module.id,
    templateUrl: "./registro.component.html"
})
export class RegistroComponent implements OnInit {

    nombre:string;
    celular:string;
    email:string;
    private feedback: Feedback;

    constructor(private routerExtensions: RouterExtensions) {
        this.feedback = new Feedback();
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    onSignupButtonTap(): void {
        const model = this;
        model.email = "123@gmaiil.com"
        console.log(model.nombre);
        console.log(model.celular);
            
        if (model.nombre && model.celular) {

            firebaseWebApi.auth().createUserWithEmailAndPassword(model.nombre,model.email,model.nombre).then((user: User) => {
               loader.hide();
               console.log("User created: " + JSON.stringify(user));
               console.log("User created: " + JSON.stringify(user.phoneNumber));
               // model.crearDatosUsuario(name,celular,email,user.uid);
            })
            .catch(error =>{
                console.log("Error creating user: " + error);
                loader.hide();
            });

        }else{

        }
    }    
    irAtras(): void {
        this.routerExtensions.back();
    }    
}
