import { Component, OnInit } from "@angular/core";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import * as observableArray from "tns-core-modules/data/observable-array";
import { RouterExtensions } from "nativescript-angular/router";
var contacts = require("nativescript-contacts");

let perfil = [
                {imagen:"~/images/icon_user.png",nombre:'Adri',fecha:'10:00'}, 
                {imagen:"~/images/icon_user.png",nombre:"Dani",fecha:'12:00'}, 
                {imagen:'~/images/icon_user.png',nombre:'Pao',fecha:'11:00'},
                {imagen:"~/images/icon_user.png",nombre:'Jochii',fecha:'1:00'}
             ];

@Component({
    selector: "Chats",
    moduleId: module.id,
    templateUrl: "./chats.component.html"
})
export class ChatsComponent implements OnInit {

    myItems = new observableArray.ObservableArray([]);
    arrayItems= new observableArray.ObservableArray([]);
    encontrados:boolean = false;
    constructor(private routerExtensions: RouterExtensions) {
        
    }

    ngOnInit(): void {

        for (let i = 0; i < perfil.length; i++) {
            this.arrayItems.push(perfil[i]);
            this.myItems.push(perfil[i]);
        }
    }
    onSubmit(args) {
        let model = this;
        let searchBar = <SearchBar>args.object;
        let searchValue = searchBar.text.toLowerCase();

        console.log('Buscando '+searchValue);
        this.myItems = new observableArray.ObservableArray([]);
        if (searchValue !== "") {
            for (let i = 0; i < this.arrayItems.length; i++) {
                console.log(this.arrayItems.getItem(i));
                if (this.arrayItems.getItem(i).nombre.toLowerCase().indexOf(searchValue) !== -1) {
                    this.myItems.push(this.arrayItems.getItem(i));
                    console.log(this.arrayItems.getItem(i));
                }
                
            } 
        }
        if(model.myItems.length > 0){
            model.encontrados=true;
        }else{
            model.encontrados=false;
        }
    } 

    onClear(args){
        let model = this;
        let searchBar = <SearchBar>args.object;
        searchBar.text = "";
        searchBar.hint = "Buscar";

        model.myItems = new observableArray.ObservableArray([]);
        model.arrayItems.forEach(item => {
            model.myItems.push(item);
        });

        if(model.myItems.length > 0){
            model.encontrados=true;
        }else{
            model.encontrados=false;
        }

    }        
    onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    }  
    onSearchBarLoaded(event) {
        if (event.object.android) {
            event.object.android.clearFocus();
        }
    } 

    onNavItemTap(imagen, nombre): void {
      const model = this;
        model.routerExtensions.navigate(['chat'], {
            queryParams:{
                imagen:imagen,
                nombre:nombre
            },
            transition: {
                name:"slideLeft",
                curve:"easeInOut"
            }
        });
    }
    abrirContactos(){
        const model = this;
        // model.routerExtensions.navigate(["contacto"],{
        //     transition:{
        //         name:"slideUp",
        //         curve:"easeInOut"
        //     }
        // })
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
