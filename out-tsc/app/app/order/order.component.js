var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { OrderService } from './order.service';
import { OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderService, router, formBuilder) {
        this.orderService = orderService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.paymentOptions = [
            { label: 'Dinheiro', value: 'DIN' },
            { label: 'Cartão Refeição', value: 'REF' },
            { label: 'Cartão Débito', value: 'DEB' }
        ];
        this.delivery = 2.75;
        this.numberPattern = /^[0-9]*$/;
    }
    OrderComponent_1 = OrderComponent;
    OrderComponent.equalsTo = function (group) {
        var email = group.get('email');
        var emailConfirmation = group.get('emailConfirmation');
        if (!email || !emailConfirmation) {
            return undefined;
        }
        if (email.value !== emailConfirmation.value) {
            return { emailIsNotMatch: true };
        }
        return undefined;
    };
    OrderComponent.prototype.ngOnInit = function () {
        this.user = this.orderService.loggedUser();
        this.orderForm = new FormGroup({
            name: this.formBuilder.control('', [
                Validators.required,
                Validators.minLength(5)
            ]),
            email: this.formBuilder.control('', [
                Validators.required,
                Validators.email
            ]),
            emailConfirmation: this.formBuilder.control('', [
                Validators.required,
                Validators.email
            ]),
            address: this.formBuilder.control('', [
                Validators.required,
                Validators.minLength(5)
            ]),
            number: this.formBuilder.control('', [
                Validators.required,
                Validators.pattern(this.numberPattern)
            ]),
            optionalAddress: this.formBuilder.control(''),
            paymentOption: this.formBuilder.control('', [Validators.required])
        }, { validators: [OrderComponent_1.equalsTo], updateOn: 'blur' });
    };
    OrderComponent.prototype.itemsValue = function () {
        return this.orderService.itemsValue();
    };
    OrderComponent.prototype.items = function () {
        return this.orderService.items();
    };
    OrderComponent.prototype.decreaseQty = function (item) {
        this.orderService.decreaseQty(item);
    };
    OrderComponent.prototype.increaseQty = function (item) {
        this.orderService.increaseQty(item);
    };
    OrderComponent.prototype.removeItem = function (item) {
        this.orderService.removeItem(item);
    };
    OrderComponent.prototype.hasSuccess = function () {
        return this.items().length > 0;
    };
    OrderComponent.prototype.checkOrder = function (order) {
        var _this = this;
        order.orderItems = this.orderService
            .items()
            .map(function (item) { return new OrderItem(item.quantity, item.item.id); });
        this.orderService.checkOrder(order)
            .pipe(tap(function (orderId) {
            _this.orderId = orderId;
        }))
            .subscribe(function () {
            _this.orderService.clear();
            _this.router.navigate(['/order-summary']);
        });
    };
    OrderComponent.prototype.isOrderCompleted = function () {
        return this.orderId !== undefined;
    };
    OrderComponent = OrderComponent_1 = __decorate([
        Component({
            selector: 'mt-order',
            templateUrl: './order.component.html'
        }),
        __metadata("design:paramtypes", [OrderService,
            Router,
            FormBuilder])
    ], OrderComponent);
    return OrderComponent;
    var OrderComponent_1;
}());
export { OrderComponent };
//# sourceMappingURL=order.component.js.map