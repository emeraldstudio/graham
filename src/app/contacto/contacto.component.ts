import { Component, OnInit } from "@angular/core";
var contacts = require("nativescript-contacts");

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "contacto", loadChildren: "./contacto/contacto.module#ContactoModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Contacto",
    moduleId: module.id,
    templateUrl: "./contacto.component.html"
})
export class ContactoComponent implements OnInit {
    constructor() {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        console.log('trayendo contactos');
        contacts.getContact().then(function(args) {
          /// Returns args:
          /// args.data: Generic cross platform JSON object
          /// args.reponse: "selected" or "cancelled" depending on wheter the user selected a contact.
          
          console.log('args');
          console.log(args);
          console.log('args.data');
          console.log(args.data);
         
          if (args.response === "selected") {
            var contact = args.data; //See data structure below
         
            // lets say you wanted to grab first name and last name
            console.log(contact.name.given + " " + contact.name.family);
         
            //lets say you want to get the phone numbers
            contact.phoneNumbers.forEach(function(phone) {
              console.log(phone.value);
            });
         
            //lets say you want to get the addresses
            // contact.postalAddresses.forEach(function(address) {
            //   console.log(address.location.street);
            // });
          }
        });  
    }

}
