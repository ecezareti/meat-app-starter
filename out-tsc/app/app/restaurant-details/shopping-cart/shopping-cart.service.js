var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { NotificationService } from './../../shared/messages/notification.service';
import { CartItem } from './cart-item.model';
var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(notificationService) {
        this.notificationService = notificationService;
        this.items = [];
    }
    ShoppingCartService.prototype.add = function (menuItem) {
        var itemFounded = this.items.find(function (item) { return item.item.id === menuItem.id; });
        if (itemFounded) {
            this.increaseQty(itemFounded);
        }
        else {
            this.items.push(new CartItem(menuItem));
        }
        this.notificationService.notify("Voc\u00EA adicionou o item " + menuItem.name + " ao carrinho");
    };
    ShoppingCartService.prototype.clear = function () {
        this.items = [];
    };
    ShoppingCartService.prototype.remove = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify("Voc\u00EA removeu o " + item.item.name);
    };
    ShoppingCartService.prototype.total = function () {
        return this.items
            .map(function (item) { return item.value(); })
            .reduce(function (previous, current) { return previous + current; }, 0);
    };
    ShoppingCartService.prototype.decreaseQty = function (item) {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
            this.remove(item);
        }
    };
    ShoppingCartService.prototype.increaseQty = function (item) {
        item.quantity = item.quantity + 1;
    };
    ShoppingCartService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NotificationService])
    ], ShoppingCartService);
    return ShoppingCartService;
}());
export { ShoppingCartService };
//# sourceMappingURL=shopping-cart.service.js.map