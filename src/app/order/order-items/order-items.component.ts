import { CartItem } from './../../restaurant-details/shopping-cart/cart-item.model';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input () items: CartItem [];
  @Output() decreaseQty = new EventEmitter<CartItem>();
  @Output() increaseQty= new EventEmitter<CartItem>();
  @Output() removeItem = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitRemoveItem (item: CartItem) {
    this.removeItem.emit(item);
  }

  emitDecreaseQuantity (item: CartItem) {
    this.decreaseQty.emit(item);
  }

  emitIncreaseQuantity (item: CartItem) {
    this.increaseQty.emit(item);
  }
}
