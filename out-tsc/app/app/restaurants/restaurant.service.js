var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MEET_API } from 'app/app.api';
var RestaurantService = /** @class */ (function () {
    function RestaurantService(http) {
        this.http = http;
    }
    RestaurantService.prototype.restaurants = function (searchTerm) {
        var params = undefined;
        if (searchTerm) {
            params = new HttpParams().set('q', searchTerm);
        }
        return this.http.get(MEET_API + "/restaurants", {
            params: params
        });
    };
    RestaurantService.prototype.restaurantById = function (id) {
        return this.http.get(MEET_API + "/restaurants/" + id);
    };
    RestaurantService.prototype.reviewsOfRestaurant = function (id) {
        return this.http.get(MEET_API + "/restaurants/" + id + "/reviews");
    };
    RestaurantService.prototype.menuOfRestaurant = function (id) {
        return this.http.get(MEET_API + "/restaurants/" + id + "/menu");
    };
    RestaurantService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], RestaurantService);
    return RestaurantService;
}());
export { RestaurantService };
//# sourceMappingURL=restaurant.service.js.map