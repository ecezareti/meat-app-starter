var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { OrderService } from 'app/order/order.service';
import { ShoppingCartService } from 'app/restaurant-details/shopping-cart/shopping-cart.service';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';
import { LoginService } from 'app/security/login/login.service';
import { LoggedInGuard } from 'app/security/loggedIn.guard';
import { LeaveOrderGuard } from 'app/order/leave-order.guard';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [RestaurantService, ShoppingCartService, OrderService, NotificationService, LoginService, LoggedInGuard, LeaveOrderGuard]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        NgModule({
            declarations: [
                InputComponent,
                RadioComponent,
                RatingComponent,
                SnackbarComponent
            ],
            imports: [
                FormsModule, ReactiveFormsModule, CommonModule
            ],
            exports: [
                InputComponent, RadioComponent, RatingComponent, SnackbarComponent,
                FormsModule, ReactiveFormsModule, CommonModule
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map