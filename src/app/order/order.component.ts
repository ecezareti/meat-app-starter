import { CartItem } from 'app/restaurant-details/shopping-cart/cart-item.model';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radioOption';
import { OrderService } from './order.service';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';

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

  delivery = 2.75;

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  itemsValue (): number {
    return this.orderService.itemsValue();
  }

  items(): CartItem[] {
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

  checkOrder (order: Order) {
    order.orderItems = this.orderService.items()
                                      .map ((item) => new OrderItem (item.quantity, item.item.id));
    this.orderService.checkOrder (order).subscribe (
      (orderId: string) => {
        this.orderService.clear();
        this.router.navigate (['/order-summary']);
      });
  }
}
