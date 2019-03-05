import { FormsModule } from '@angular/forms';
import { CartItem } from 'app/restaurant-details/shopping-cart/cart-item.model';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radioOption';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'DIN' },
    { label: 'Cartão Refeição', value: 'REF' },
    { label: 'Cartão Débito', value: 'DEB' },
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  items (): CartItem []{
    return this.orderService.items();
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  removeItem (item: CartItem) {
    this.orderService.removeItem(item);
  }

  hasSuccess(): boolean {
    return this.items().length > 0;
  }
}
