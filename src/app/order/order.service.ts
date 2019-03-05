import { CartItem } from 'app/restaurant-details/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-details/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  constructor (private cartService: ShoppingCartService) { }

  items(): CartItem [] {
    return this.cartService.items;
  }

  removeItem (item: CartItem) {
    this.cartService.remove(item);
  }

  increaseQty (item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty (item: CartItem) {
    this.cartService.decreaseQty(item);
  }
}
