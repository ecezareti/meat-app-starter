var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LoginService } from './../security/login/login.service';
import { map } from 'rxjs/operators';
import { MEET_API } from './../app.api';
import { ShoppingCartService } from './../restaurant-details/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var OrderService = /** @class */ (function () {
    function OrderService(cartService, http, loginService) {
        this.cartService = cartService;
        this.http = http;
        this.loginService = loginService;
    }
    OrderService.prototype.loggedUser = function () {
        return this.loginService.user;
    };
    OrderService.prototype.items = function () {
        return this.cartService.items;
    };
    OrderService.prototype.removeItem = function (item) {
        this.cartService.remove(item);
    };
    OrderService.prototype.increaseQty = function (item) {
        this.cartService.increaseQty(item);
    };
    OrderService.prototype.decreaseQty = function (item) {
        this.cartService.decreaseQty(item);
    };
    OrderService.prototype.itemsValue = function () {
        return this.cartService.total();
    };
    OrderService.prototype.checkOrder = function (order) {
        return this.http
            .post(MEET_API + "/orders", order)
            .pipe(map(function (responseOrder) { return responseOrder.id; }));
    };
    OrderService.prototype.clear = function () {
        this.cartService.clear();
    };
    OrderService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ShoppingCartService, HttpClient, LoginService])
    ], OrderService);
    return OrderService;
}());
export { OrderService };
//# sourceMappingURL=order.service.js.map