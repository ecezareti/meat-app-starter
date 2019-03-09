import { Injectable } from '@angular/core';
import { NotificationService } from './../../shared/messages/notification.service';
import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';

@Injectable()
export class ShoppingCartService {
  items: CartItem[] = [];

  constructor (private notificationService: NotificationService) {}

  add (menuItem: MenuItem): void {
    let itemFounded = this.items.find((item) => item.item.id === menuItem.id);

    if (itemFounded) {
      this.increaseQty(itemFounded);
    } else {
      this.items.push(new CartItem(menuItem));
    }

    this.notificationService.notify(`Você adicionou o item ${menuItem.name} ao carrinho`);
  }

  clear() {
    this.items = [];
  }

  remove (item: CartItem): void {
    this.items.splice(this.items.indexOf(item), 1);

    this.notificationService.notify(`Você removeu o ${item.item.name}`);
  }

  total(): number {
    return this.items
      .map (item => item.value())
      .reduce((previous, current) => previous + current, 0);
  }

  decreaseQty(item: CartItem): any {
    item.quantity = item.quantity - 1;

    if (item.quantity === 0){
      this.remove(item);
    }
  }

  increaseQty(item: CartItem): any {
    item.quantity = item.quantity + 1;
  }
}
