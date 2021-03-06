import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
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

@NgModule({
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

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [RestaurantService, ShoppingCartService, OrderService, NotificationService, LoginService, LoggedInGuard, LeaveOrderGuard]
    };
  }
}
