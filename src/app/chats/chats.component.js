"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observableArray = require("tns-core-modules/data/observable-array");
var router_1 = require("nativescript-angular/router");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHdFQUEwRTtBQUMxRSxzREFBK0Q7QUFFL0QsSUFBSSxNQUFNLEdBQUc7SUFDRyxFQUFDLE1BQU0sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUM7SUFDN0QsRUFBQyxNQUFNLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDO0lBQzdELEVBQUMsTUFBTSxFQUFDLHdCQUF3QixFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQztJQUM1RCxFQUFDLE1BQU0sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUM7Q0FDaEUsQ0FBQztBQU9mO0lBS0ksd0JBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSHRELFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEQsZUFBVSxHQUFFLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxnQkFBVyxHQUFXLEtBQUssQ0FBQztJQUc1QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUVJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMs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SyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RDLFdBQVcsRUFBQztnQkFDUixNQUFNLEVBQUMsTUFBTTtnQkFDYixNQUFNLEVBQUMsTUFBTTthQUNoQjtZQUNELFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUMsV0FBVztnQkFDaEIsS0FBSyxFQUFDLFdBQVc7YUFDcEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBaEZRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBTXdDLHlCQUFnQjtPQUw3QyxjQUFjLENBaUYxQjtJQUFELHFCQUFDO0NBQUEsQUFqRkQsSUFpRkM7QUFqRlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgKiBhcyBvYnNlcnZhYmxlQXJyYXkgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5sZXQgcGVyZmlsID0gW1xuICAgICAgICAgICAgICAgIHtpbWFnZW46XCJ+L2ltYWdlcy9pY29uX3VzZXIucG5nXCIsbm9tYnJlOidBZHJpJyxmZWNoYTonMTA6MDAnfSwgXG4gICAgICAgICAgICAgICAge2ltYWdlbjpcIn4vaW1hZ2VzL2ljb25fdXNlci5wbmdcIixub21icmU6XCJEYW5pXCIsZmVjaGE6JzEyOjAwJ30sIFxuICAgICAgICAgICAgICAgIHtpbWFnZW46J34vaW1hZ2VzL2ljb25fdXNlci5wbmcnLG5vbWJyZTonUGFvJyxmZWNoYTonMTE6MDAnfSxcbiAgICAgICAgICAgICAgICB7aW1hZ2VuOlwifi9pbWFnZXMvaWNvbl91c2VyLnBuZ1wiLG5vbWJyZTonSm9jaGlpJyxmZWNoYTonMTowMCd9XG4gICAgICAgICAgICAgXTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQ2hhdHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY2hhdHMuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBDaGF0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBteUl0ZW1zID0gbmV3IG9ic2VydmFibGVBcnJheS5PYnNlcnZhYmxlQXJyYXkoW10pO1xuICAgIGFycmF5SXRlbXM9IG5ldyBvYnNlcnZhYmxlQXJyYXkuT2JzZXJ2YWJsZUFycmF5KFtdKTtcbiAgICBlbmNvbnRyYWRvczpib29sZWFuID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGVyZmlsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFycmF5SXRlbXMucHVzaChwZXJmaWxbaV0pO1xuICAgICAgICAgICAgdGhpcy5teUl0ZW1zLnB1c2gocGVyZmlsW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblN1Ym1pdChhcmdzKSB7XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXM7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICBsZXQgc2VhcmNoVmFsdWUgPSBzZWFyY2hCYXIudGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdCdXNjYW5kbyAnK3NlYXJjaFZhbHVlKTtcbiAgICAgICAgdGhpcy5teUl0ZW1zID0gbmV3IG9ic2VydmFibGVBcnJheS5PYnNlcnZhYmxlQXJyYXkoW10pO1xuICAgICAgICBpZiAoc2VhcmNoVmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJheUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnJheUl0ZW1zLmdldEl0ZW0oaSkpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFycmF5SXRlbXMuZ2V0SXRlbShpKS5ub21icmUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUl0ZW1zLnB1c2godGhpcy5hcnJheUl0ZW1zLmdldEl0ZW0oaSkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFycmF5SXRlbXMuZ2V0SXRlbShpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBpZihtb2RlbC5teUl0ZW1zLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbW9kZWwuZW5jb250cmFkb3M9dHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBtb2RlbC5lbmNvbnRyYWRvcz1mYWxzZTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBvbkNsZWFyKGFyZ3Mpe1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzO1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgc2VhcmNoQmFyLnRleHQgPSBcIlwiO1xuICAgICAgICBzZWFyY2hCYXIuaGludCA9IFwiQnVzY2FyXCI7XG5cbiAgICAgICAgbW9kZWwubXlJdGVtcyA9IG5ldyBvYnNlcnZhYmxlQXJyYXkuT2JzZXJ2YWJsZUFycmF5KFtdKTtcbiAgICAgICAgbW9kZWwuYXJyYXlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgbW9kZWwubXlJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZihtb2RlbC5teUl0ZW1zLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbW9kZWwuZW5jb250cmFkb3M9dHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBtb2RlbC5lbmNvbnRyYWRvcz1mYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfSAgICAgICAgXG4gICAgb25UZXh0Q2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaEJhciB0ZXh0IGNoYW5nZWQhIE5ldyB2YWx1ZTogXCIgKyBzZWFyY2hCYXIudGV4dCk7XG4gICAgfSAgXG4gICAgb25TZWFyY2hCYXJMb2FkZWQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50Lm9iamVjdC5hbmRyb2lkKSB7XG4gICAgICAgICAgICBldmVudC5vYmplY3QuYW5kcm9pZC5jbGVhckZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgb25OYXZJdGVtVGFwKGltYWdlbiwgbm9tYnJlKTogdm9pZCB7XG4gICAgICBjb25zdCBtb2RlbCA9IHRoaXM7XG4gICAgICAgIG1vZGVsLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWydjaGF0J10sIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOntcbiAgICAgICAgICAgICAgICBpbWFnZW46aW1hZ2VuLFxuICAgICAgICAgICAgICAgIG5vbWJyZTpub21icmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTpcInNsaWRlTGVmdFwiLFxuICAgICAgICAgICAgICAgIGN1cnZlOlwiZWFzZUluT3V0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSAgICAgIFxufVxuIl19