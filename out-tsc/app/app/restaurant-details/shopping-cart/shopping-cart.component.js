var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ShoppingCartService } from './shopping-cart.service';
import { Component } from '@angular/core';
import { trigger, style, transition, state, animate, keyframes } from '@angular/animations';
var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.rowState = 'ready';
    }
    ShoppingCartComponent.prototype.ngOnInit = function () { };
    ShoppingCartComponent.prototype.items = function () {
        return this.shoppingCartService.items;
    };
    ShoppingCartComponent.prototype.total = function () {
        return this.shoppingCartService.total();
    };
    ShoppingCartComponent.prototype.addItem = function (menuItem) {
        this.shoppingCartService.add(menuItem);
    };
    ShoppingCartComponent.prototype.removeItem = function (cartItem) {
        this.shoppingCartService.remove(cartItem);
    };
    ShoppingCartComponent.prototype.clear = function () {
        this.shoppingCartService.clear();
    };
    ShoppingCartComponent = __decorate([
        Component({
            selector: 'mt-shopping-cart',
            templateUrl: './shopping-cart.component.html',
            animations: [
                trigger('row', [
                    state('ready', style({ opacity: 1 })),
                    transition('void => ready', animate('300ms 0ms ease-in', keyframes([
                        style({ opacity: 0, transform: 'translatex(-30px)', offset: 0 }),
                        style({
                            opacity: 0.8,
                            transform: 'translatex(-10px)',
                            offset: 0.8
                        }),
                        style({ opacity: 1, transform: 'translatex(0px)', offset: 1 })
                    ]))),
                    transition('ready => void', animate('300ms 0ms ease-out', keyframes([
                        style({ opacity: 1, transform: 'translatex(0px)', offset: 0 }),
                        style({ opacity: 0.8, transform: 'translatex(10px)', offset: 0.2 }),
                        style({ opacity: 1, transform: 'translatex(30px)', offset: 1 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [ShoppingCartService])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
export { ShoppingCartComponent };
//# sourceMappingURL=shopping-cart.component.js.map