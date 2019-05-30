"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataService = /** @class */ (function () {
    function DataService() {
        this.players = new Array({ id: 1, name: "Player One" }, { id: 2, name: "Player Two" });
        this.teams = new Array({ id: 1, name: "Team One" }, { id: 2, name: "Team Two" });
    }
    DataService.prototype.getPlayers = function () {
        return this.players;
    };
    DataService.prototype.getPlayer = function (id) {
        return this.players.filter(function (item) { return item.id === id; })[0];
    };
    DataService.prototype.getTeams = function () {
        return this.teams;
    };
    DataService.prototype.getTeam = function (id) {
        return this.teams.filter(function (item) { return item.id === id; })[0];
    };
    DataService = __decorate([
        core_1.Injectable()
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBUTNDO0lBREE7UUFFWSxZQUFPLEdBQUcsSUFBSSxLQUFLLENBQ3ZCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzdCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQ2hDLENBQUM7UUFFTSxVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3JCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQzNCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQzlCLENBQUM7SUFpQk4sQ0FBQztJQWZHLGdDQUFVLEdBQVY7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxFQUFVO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQVU7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQXpCUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7T0FDQSxXQUFXLENBMEJ2QjtJQUFELGtCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhSXRlbSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG4gICAgcHJpdmF0ZSBwbGF5ZXJzID0gbmV3IEFycmF5PERhdGFJdGVtPihcbiAgICAgICAgeyBpZDogMSwgbmFtZTogXCJQbGF5ZXIgT25lXCIgfSxcbiAgICAgICAgeyBpZDogMiwgbmFtZTogXCJQbGF5ZXIgVHdvXCIgfSxcbiAgICApO1xuXG4gICAgcHJpdmF0ZSB0ZWFtcyA9IG5ldyBBcnJheTxEYXRhSXRlbT4oXG4gICAgICAgIHsgaWQ6IDEsIG5hbWU6IFwiVGVhbSBPbmVcIiB9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiBcIlRlYW0gVHdvXCIgfSxcbiAgICApO1xuXG4gICAgZ2V0UGxheWVycygpOiBEYXRhSXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVycztcbiAgICB9XG5cbiAgICBnZXRQbGF5ZXIoaWQ6IG51bWJlcik6IERhdGFJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVycy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gICAgfVxuXG4gICAgZ2V0VGVhbXMoKTogRGF0YUl0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlYW1zO1xuICAgIH1cblxuICAgIGdldFRlYW0oaWQ6IG51bWJlcik6IERhdGFJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVhbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xuICAgIH1cbn1cbiJdfQ==