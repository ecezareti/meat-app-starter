import { NgModule } from '@angular/core';
import { OrderService } from 'app/order/order.service';
import { ShoppingCartService } from 'app/restaurant-details/shopping-cart/shopping-cart.service';
import { RestaurantService } from 'app/restaurants/restaurant.service';

@NgModule ({
  providers: [RestaurantService, ShoppingCartService, OrderService]
})
export class CoreModule {

}
