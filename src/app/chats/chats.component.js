"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observableArray = require("tns-core-modules/data/observable-array");
var router_1 = require("nativescript-angular/router");
var permissions = require("nativescript-permissions");
var android = require("nativescript-permissions");
var contacts = require("nativescript-contacts");
var perfil = [
    { imagen: "~/images/icon_user.png", nombre: 'Adri', fecha: '10:00' },
    { imagen: "~/images/icon_user.png", nombre: "Dani", fecha: '12:00' },
    { imagen: '~/images/icon_user.png', nombre: 'Pao', fecha: '11:00' },
    { imagen: "~/images/icon_user.png", nombre: 'Jochii', fecha: '1:00' }
];
var ChatsComponent = /** @class */ (function () {
    function ChatsComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.myItems = new observableArray.ObservableArray([]);
        this.arrayItems = new observableArray.ObservableArray([]);
        this.encontrados = false;
    }
    ChatsComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < perfil.length; i++) {
            this.arrayItems.push(perfil[i]);
            this.myItems.push(perfil[i]);
        }
    };
    ChatsComponent.prototype.onSubmit = function (args) {
        var model = this;
        var searchBar = args.object;
        var searchValue = searchBar.text.toLowerCase();
        console.log('Buscando ' + searchValue);
        this.myItems = new observableArray.ObservableArray([]);
        if (searchValue !== "") {
            for (var i = 0; i < this.arrayItems.length; i++) {
                console.log(this.arrayItems.getItem(i));
                if (this.arrayItems.getItem(i).nombre.toLowerCase().indexOf(searchValue) !== -1) {
                    this.myItems.push(this.arrayItems.getItem(i));
                    console.log(this.arrayItems.getItem(i));
                }
            }
        }
        if (model.myItems.length > 0) {
            model.encontrados = true;
        }
        else {
            model.encontrados = false;
        }
    };
    ChatsComponent.prototype.onClear = function (args) {
        var model = this;
        var searchBar = args.object;
        searchBar.text = "";
        searchBar.hint = "Buscar";
        model.myItems = new observableArray.ObservableArray([]);
        model.arrayItems.forEach(function (item) {
            model.myItems.push(item);
        });
        if (model.myItems.length > 0) {
            model.encontrados = true;
        }
        else {
            model.encontrados = false;
        }
    };
    ChatsComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    };
    ChatsComponent.prototype.onSearchBarLoaded = function (event) {
        if (event.object.android) {
            event.object.android.clearFocus();
        }
    };
    ChatsComponent.prototype.onNavItemTap = function (imagen, nombre) {
        var model = this;
        model.routerExtensions.navigate(['chat'], {
            queryParams: {
                imagen: imagen,
                nombre: nombre
            },
            transition: {
                name: "slideLeft",
                curve: "easeInOut"
            }
        });
    };
    ChatsComponent.prototype.abrirContactos = function () {
        var model = this;
        // model.routerExtensions.navigate(["contacto"],{
        //     transition:{
        //         name:"slideUp",
        //         curve:"easeInOut"
        //     }
        // })
        permissions.requestPermission(android.Manifest.permission.READ_CONTACTS, "I need these permissions because I'm cool")
            .then(function () {
            console.log("Woo Hoo, I have the power!");
        })
            .catch(function () {
            console.log("Uh oh, no permissions - plan B time!");
        });
        console.log('trayendo contactos');
        contacts.getContact().then(function (args) {
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
                contact.phoneNumbers.forEach(function (phone) {
                    console.log(phone.value);
                });
                //lets say you want to get the addresses
                // contact.postalAddresses.forEach(function(address) {
                //   console.log(address.location.street);
                // });
            }
        });
    };
    ChatsComponent = __decorate([
        core_1.Component({
            selector: "Chats",
            moduleId: module.id,
            templateUrl: "./chats.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], ChatsComponent);
    return ChatsComponent;
}());
exports.ChatsComponent = ChatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHdFQUEwRTtBQUMxRSxzREFBK0Q7QUFFL0QsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFFLDBCQUEwQixDQUFFLENBQUM7QUFDMUQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFFLDBCQUEwQixDQUFFLENBQUM7QUFDdEQsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFFaEQsSUFBSSxNQUFNLEdBQUc7SUFDRyxFQUFDLE1BQU0sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUM7SUFDN0QsRUFBQyxNQUFNLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDO0lBQzdELEVBQUMsTUFBTSxFQUFDLHdCQUF3QixFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQztJQUM1RCxFQUFDLE1BQU0sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUM7Q0FDaEUsQ0FBQztBQU9mO0lBS0ksd0JBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSHRELFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEQsZUFBVSxHQUFFLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxnQkFBVyxHQUFXLEtBQUssQ0FBQztJQUc1QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUVJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFB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Q0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRTtnQkFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLDBCQUEwQjtnQkFFbkQsdURBQXVEO2dCQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUU1RCw0Q0FBNEM7Z0JBQzVDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVMsS0FBSztvQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO2dCQUVILHdDQUF3QztnQkFDeEMsc0RBQXNEO2dCQUN0RCwwQ0FBMEM7Z0JBQzFDLE1BQU07YUFDUDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTVIUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQU13Qyx5QkFBZ0I7T0FMN0MsY0FBYyxDQTZIMUI7SUFBRCxxQkFBQztDQUFBLEFBN0hELElBNkhDO0FBN0hZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0ICogYXMgb2JzZXJ2YWJsZUFycmF5IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MsIGRldmljZSwgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmNvbnN0IHBlcm1pc3Npb25zID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtcGVybWlzc2lvbnNcIiApO1xuY29uc3QgYW5kcm9pZCA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LXBlcm1pc3Npb25zXCIgKTtcbnZhciBjb250YWN0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY29udGFjdHNcIik7XG5cbmxldCBwZXJmaWwgPSBbXG4gICAgICAgICAgICAgICAge2ltYWdlbjpcIn4vaW1hZ2VzL2ljb25fdXNlci5wbmdcIixub21icmU6J0FkcmknLGZlY2hhOicxMDowMCd9LCBcbiAgICAgICAgICAgICAgICB7aW1hZ2VuOlwifi9pbWFnZXMvaWNvbl91c2VyLnBuZ1wiLG5vbWJyZTpcIkRhbmlcIixmZWNoYTonMTI6MDAnfSwgXG4gICAgICAgICAgICAgICAge2ltYWdlbjonfi9pbWFnZXMvaWNvbl91c2VyLnBuZycsbm9tYnJlOidQYW8nLGZlY2hhOicxMTowMCd9LFxuICAgICAgICAgICAgICAgIHtpbWFnZW46XCJ+L2ltYWdlcy9pY29uX3VzZXIucG5nXCIsbm9tYnJlOidKb2NoaWknLGZlY2hhOicxOjAwJ31cbiAgICAgICAgICAgICBdO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJDaGF0c1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jaGF0cy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIENoYXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG15SXRlbXMgPSBuZXcgb2JzZXJ2YWJsZUFycmF5Lk9ic2VydmFibGVBcnJheShbXSk7XG4gICAgYXJyYXlJdGVtcz0gbmV3IG9ic2VydmFibGVBcnJheS5PYnNlcnZhYmxlQXJyYXkoW10pO1xuICAgIGVuY29udHJhZG9zOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwZXJmaWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYXJyYXlJdGVtcy5wdXNoKHBlcmZpbFtpXSk7XG4gICAgICAgICAgICB0aGlzLm15SXRlbXMucHVzaChwZXJmaWxbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uU3VibWl0KGFyZ3MpIHtcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcztcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGxldCBzZWFyY2hWYWx1ZSA9IHNlYXJjaEJhci50ZXh0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ0J1c2NhbmRvICcrc2VhcmNoVmFsdWUpO1xuICAgICAgICB0aGlzLm15SXRlbXMgPSBuZXcgb2JzZXJ2YWJsZUFycmF5Lk9ic2VydmFibGVBcnJheShbXSk7XG4gICAgICAgIGlmIChzZWFyY2hWYWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFycmF5SXRlbXMuZ2V0SXRlbShpKSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJyYXlJdGVtcy5nZXRJdGVtKGkpLm5vbWJyZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15SXRlbXMucHVzaCh0aGlzLmFycmF5SXRlbXMuZ2V0SXRlbShpKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJyYXlJdGVtcy5nZXRJdGVtKGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICAgIGlmKG1vZGVsLm15SXRlbXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBtb2RlbC5lbmNvbnRyYWRvcz10cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1vZGVsLmVuY29udHJhZG9zPWZhbHNlO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIG9uQ2xlYXIoYXJncyl7XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXM7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICBzZWFyY2hCYXIudGV4dCA9IFwiXCI7XG4gICAgICAgIHNlYXJjaEJhci5oaW50ID0gXCJCdXNjYXJcIjtcblxuICAgICAgICBtb2RlbC5teUl0ZW1zID0gbmV3IG9ic2VydmFibGVBcnJheS5PYnNlcnZhYmxlQXJyYXkoW10pO1xuICAgICAgICBtb2RlbC5hcnJheUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBtb2RlbC5teUl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKG1vZGVsLm15SXRlbXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBtb2RlbC5lbmNvbnRyYWRvcz10cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG1vZGVsLmVuY29udHJhZG9zPWZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9ICAgICAgICBcbiAgICBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoQmFyIHRleHQgY2hhbmdlZCEgTmV3IHZhbHVlOiBcIiArIHNlYXJjaEJhci50ZXh0KTtcbiAgICB9ICBcbiAgICBvblNlYXJjaEJhckxvYWRlZChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQub2JqZWN0LmFuZHJvaWQpIHtcbiAgICAgICAgICAgIGV2ZW50Lm9iamVjdC5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBvbk5hdkl0ZW1UYXAoaW1hZ2VuLCBub21icmUpOiB2b2lkIHtcbiAgICAgIGNvbnN0IG1vZGVsID0gdGhpcztcbiAgICAgICAgbW9kZWwucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJ2NoYXQnXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6e1xuICAgICAgICAgICAgICAgIGltYWdlbjppbWFnZW4sXG4gICAgICAgICAgICAgICAgbm9tYnJlOm5vbWJyZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOlwic2xpZGVMZWZ0XCIsXG4gICAgICAgICAgICAgICAgY3VydmU6XCJlYXNlSW5PdXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJyaXJDb250YWN0b3MoKXtcbiAgICAgICAgY29uc3QgbW9kZWwgPSB0aGlzO1xuICAgICAgICAvLyBtb2RlbC5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImNvbnRhY3RvXCJdLHtcbiAgICAgICAgLy8gICAgIHRyYW5zaXRpb246e1xuICAgICAgICAvLyAgICAgICAgIG5hbWU6XCJzbGlkZVVwXCIsXG4gICAgICAgIC8vICAgICAgICAgY3VydmU6XCJlYXNlSW5PdXRcIlxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KVxuICAgICAgICBwZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihhbmRyb2lkLk1hbmlmZXN0LnBlcm1pc3Npb24uUkVBRF9DT05UQUNUUywgXCJJIG5lZWQgdGhlc2UgcGVybWlzc2lvbnMgYmVjYXVzZSBJJ20gY29vbFwiKVxuICAgICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJXb28gSG9vLCBJIGhhdmUgdGhlIHBvd2VyIVwiKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCggKCkgPT4ge1xuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVWggb2gsIG5vIHBlcm1pc3Npb25zIC0gcGxhbiBCIHRpbWUhXCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygndHJheWVuZG8gY29udGFjdG9zJyk7XG4gICAgICAgIGNvbnRhY3RzLmdldENvbnRhY3QoKS50aGVuKGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAvLy8gUmV0dXJucyBhcmdzOlxuICAgICAgICAgIC8vLyBhcmdzLmRhdGE6IEdlbmVyaWMgY3Jvc3MgcGxhdGZvcm0gSlNPTiBvYmplY3RcbiAgICAgICAgICAvLy8gYXJncy5yZXBvbnNlOiBcInNlbGVjdGVkXCIgb3IgXCJjYW5jZWxsZWRcIiBkZXBlbmRpbmcgb24gd2hldGVyIHRoZSB1c2VyIHNlbGVjdGVkIGEgY29udGFjdC5cbiAgICAgICAgICBcbiAgICAgICAgICBjb25zb2xlLmxvZygnYXJncycpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdhcmdzLmRhdGEnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzLmRhdGEpO1xuICAgICAgICAgXG4gICAgICAgICAgaWYgKGFyZ3MucmVzcG9uc2UgPT09IFwic2VsZWN0ZWRcIikge1xuICAgICAgICAgICAgdmFyIGNvbnRhY3QgPSBhcmdzLmRhdGE7IC8vU2VlIGRhdGEgc3RydWN0dXJlIGJlbG93XG4gICAgICAgICBcbiAgICAgICAgICAgIC8vIGxldHMgc2F5IHlvdSB3YW50ZWQgdG8gZ3JhYiBmaXJzdCBuYW1lIGFuZCBsYXN0IG5hbWVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRhY3QubmFtZS5naXZlbiArIFwiIFwiICsgY29udGFjdC5uYW1lLmZhbWlseSk7XG4gICAgICAgICBcbiAgICAgICAgICAgIC8vbGV0cyBzYXkgeW91IHdhbnQgdG8gZ2V0IHRoZSBwaG9uZSBudW1iZXJzXG4gICAgICAgICAgICBjb250YWN0LnBob25lTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKHBob25lKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBob25lLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgXG4gICAgICAgICAgICAvL2xldHMgc2F5IHlvdSB3YW50IHRvIGdldCB0aGUgYWRkcmVzc2VzXG4gICAgICAgICAgICAvLyBjb250YWN0LnBvc3RhbEFkZHJlc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uKGFkZHJlc3MpIHtcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coYWRkcmVzcy5sb2NhdGlvbi5zdHJlZXQpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTsgIFxuICAgIH0gICAgICBcbn1cbiJdfQ==