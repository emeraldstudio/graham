import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
const firebase = require("nativescript-plugin-firebase");
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { FirebaseTrace } from "nativescript-plugin-firebase/performance/performance";
import {LoadingIndicator} from "nativescript-loading-indicator";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { isIOS,isAndroid } from "tns-core-modules/platform";
let loader = new LoadingIndicator();

@Component({
    moduleId: module.id,
    selector: "login-page",
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit{
	celular:string;
    private feedback: Feedback;        

    constructor(private routerExtension: RouterExtensions) { 
        this.feedback = new Feedback();
    };

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }    

    onNavigateWelcome() {
        // Navigate to welcome page with clearHistory
        this.routerExtension.navigate(["../welcome"], { clearHistory: true });
    }

    onSigninButtonTap(): void {	
    	const model = this;
    	const celular = this.celular;
    	console.log(celular)

        if (celular) {
            // call firebase login         	

    		firebase.login({
    		    type: firebase.LoginType.PHONE,
    		    phoneOptions: {
    		      phoneNumber: '+57'+celular,
    		      verificationPrompt: "The received verification code" // default "Verification code"
    		    }
    		}).then(
    		      function (result) {
    		        JSON.stringify(result);
    		        console.log(result);
                    model.routerExtension.navigate(['/tabs/default'])
    		      },
    		      function (errorMessage) {
    		        console.log(errorMessage);
    		      }
    		);  
        
        }else{
            model.feedback.warning({
                message:'Introduce tu celular'
            })
        }              
    }
   
    salir():void{
        console.log('salio sesion')
		firebase.logout();   
	}
}
