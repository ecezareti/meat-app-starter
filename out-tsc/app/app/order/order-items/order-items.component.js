var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { OrderService } from './../order.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
var OrderItemsComponent = /** @class */ (function () {
    function OrderItemsComponent(orderService) {
        this.orderService = orderService;
        this.decreaseQty = new EventEmitter();
        this.increaseQty = new EventEmitter();
        this.removeItem = new EventEmitter();
    }
    OrderItemsComponent.prototype.ngOnInit = function () {
    };
    OrderItemsComponent.prototype.emitRemoveItem = function (item) {
        this.removeItem.emit(item);
    };
    OrderItemsComponent.prototype.emitDecreaseQuantity = function (item) {
        this.decreaseQty.emit(item);
    };
    OrderItemsComponent.prototype.emitIncreaseQuantity = function (item) {
        this.increaseQty.emit(item);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], OrderItemsComponent.prototype, "items", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], OrderItemsComponent.prototype, "decreaseQty", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], OrderItemsComponent.prototype, "increaseQty", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], OrderItemsComponent.prototype, "removeItem", void 0);
    OrderItemsComponent = __decorate([
        Component({
            selector: 'mt-order-items',
            templateUrl: './order-items.component.html'
        }),
        __metadata("design:paramtypes", [OrderService])
    ], OrderItemsComponent);
    return OrderItemsComponent;
}());
export { OrderItemsComponent };
//# sourceMappingURL=order-items.component.js.map