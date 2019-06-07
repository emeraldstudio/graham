"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contacts = require("nativescript-contacts");
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "contacto", loadChildren: "./contacto/contacto.module#ContactoModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
var ContactoComponent = /** @class */ (function () {
    function ContactoComponent() {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }
    ContactoComponent.prototype.ngOnInit = function () {
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
    ContactoComponent = __decorate([
        core_1.Component({
            selector: "Contacto",
            moduleId: module.id,
            templateUrl: "./contacto.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], ContactoComponent);
    return ContactoComponent;
}());
exports.ContactoComponent = ContactoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdG8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRWhEOzs7Ozs4REFLOEQ7QUFPOUQ7SUFDSTtRQUNJOztzRUFFOEQ7SUFDbEUsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDdEMsaUJBQWlCO1lBQ2pCLGlEQUFpRDtZQUNqRCw0RkFBNEY7WUFFNUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRTtnQkFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLDBCQUEwQjtnQkFFbkQsdURBQXVEO2dCQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUU1RCw0Q0FBNEM7Z0JBQzVDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVMsS0FBSztvQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO2dCQUVILHdDQUF3QztnQkFDeEMsc0RBQXNEO2dCQUN0RCwwQ0FBMEM7Z0JBQzFDLE1BQU07YUFDUDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXBDUSxpQkFBaUI7UUFMN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1NBQzNDLENBQUM7O09BQ1csaUJBQWlCLENBc0M3QjtJQUFELHdCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xudmFyIGNvbnRhY3RzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jb250YWN0c1wiKTtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogQmVmb3JlIHlvdSBjYW4gbmF2aWdhdGUgdG8gdGhpcyBwYWdlIGZyb20geW91ciBhcHAsIHlvdSBuZWVkIHRvIHJlZmVyZW5jZSB0aGlzIHBhZ2UncyBtb2R1bGUgaW4gdGhlXG4qIGdsb2JhbCBhcHAgcm91dGVyIG1vZHVsZS4gQWRkIHRoZSBmb2xsb3dpbmcgb2JqZWN0IHRvIHRoZSBnbG9iYWwgYXJyYXkgb2Ygcm91dGVzOlxuKiB7IHBhdGg6IFwiY29udGFjdG9cIiwgbG9hZENoaWxkcmVuOiBcIi4vY29udGFjdG8vY29udGFjdG8ubW9kdWxlI0NvbnRhY3RvTW9kdWxlXCIgfVxuKiBOb3RlIHRoYXQgdGhpcyBzaW1wbHkgcG9pbnRzIHRoZSBwYXRoIHRvIHRoZSBwYWdlIG1vZHVsZSBmaWxlLiBJZiB5b3UgbW92ZSB0aGUgcGFnZSwgeW91IG5lZWQgdG8gdXBkYXRlIHRoZSByb3V0ZSB0b28uXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJDb250YWN0b1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb250YWN0by5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBhcHAgc2VydmljZXMgdGhhdCB5b3UgbmVlZCBpbiB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RyYXllbmRvIGNvbnRhY3RvcycpO1xuICAgICAgICBjb250YWN0cy5nZXRDb250YWN0KCkudGhlbihmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgLy8vIFJldHVybnMgYXJnczpcbiAgICAgICAgICAvLy8gYXJncy5kYXRhOiBHZW5lcmljIGNyb3NzIHBsYXRmb3JtIEpTT04gb2JqZWN0XG4gICAgICAgICAgLy8vIGFyZ3MucmVwb25zZTogXCJzZWxlY3RlZFwiIG9yIFwiY2FuY2VsbGVkXCIgZGVwZW5kaW5nIG9uIHdoZXRlciB0aGUgdXNlciBzZWxlY3RlZCBhIGNvbnRhY3QuXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2coJ2FyZ3MnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnYXJncy5kYXRhJyk7XG4gICAgICAgICAgY29uc29sZS5sb2coYXJncy5kYXRhKTtcbiAgICAgICAgIFxuICAgICAgICAgIGlmIChhcmdzLnJlc3BvbnNlID09PSBcInNlbGVjdGVkXCIpIHtcbiAgICAgICAgICAgIHZhciBjb250YWN0ID0gYXJncy5kYXRhOyAvL1NlZSBkYXRhIHN0cnVjdHVyZSBiZWxvd1xuICAgICAgICAgXG4gICAgICAgICAgICAvLyBsZXRzIHNheSB5b3Ugd2FudGVkIHRvIGdyYWIgZmlyc3QgbmFtZSBhbmQgbGFzdCBuYW1lXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb250YWN0Lm5hbWUuZ2l2ZW4gKyBcIiBcIiArIGNvbnRhY3QubmFtZS5mYW1pbHkpO1xuICAgICAgICAgXG4gICAgICAgICAgICAvL2xldHMgc2F5IHlvdSB3YW50IHRvIGdldCB0aGUgcGhvbmUgbnVtYmVyc1xuICAgICAgICAgICAgY29udGFjdC5waG9uZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbihwaG9uZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwaG9uZS52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgIFxuICAgICAgICAgICAgLy9sZXRzIHNheSB5b3Ugd2FudCB0byBnZXQgdGhlIGFkZHJlc3Nlc1xuICAgICAgICAgICAgLy8gY29udGFjdC5wb3N0YWxBZGRyZXNzZXMuZm9yRWFjaChmdW5jdGlvbihhZGRyZXNzKSB7XG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGFkZHJlc3MubG9jYXRpb24uc3RyZWV0KTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7ICBcbiAgICB9XG5cbn1cbiJdfQ==