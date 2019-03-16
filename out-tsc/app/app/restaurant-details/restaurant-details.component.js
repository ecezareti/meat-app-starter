var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { RestaurantService } from './../restaurants/restaurant.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var RestaurantDetailsComponent = /** @class */ (function () {
    function RestaurantDetailsComponent(restaurantService, route) {
        this.restaurantService = restaurantService;
        this.route = route;
        this.menuState = 'ready';
    }
    RestaurantDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.restaurantService.restaurantById(id)
            .subscribe(function (restaurant) { return _this.restaurant = restaurant; });
    };
    RestaurantDetailsComponent = __decorate([
        Component({
            selector: 'mt-restaurant-details',
            templateUrl: './restaurant-details.component.html'
        }),
        __metadata("design:paramtypes", [RestaurantService,
            ActivatedRoute])
    ], RestaurantDetailsComponent);
    return RestaurantDetailsComponent;
}());
export { RestaurantDetailsComponent };
//# sourceMappingURL=restaurant-details.component.js.map