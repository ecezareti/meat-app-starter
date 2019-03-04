import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';

export class ShoppingCartService {
  items: CartItem[] = [];

  add (menuItem: MenuItem): void {
    let itemFounded = this.items.find((item) => item.item.id === menuItem.id);

    if (itemFounded){
      itemFounded.quantity = itemFounded.quantity + 1;
    } else {
      this.items.push(new CartItem(menuItem));
    }
  }

  remove (item: CartItem): void {
    this.items.splice(this.items.indexOf(item), 0);
  }

  total(): number {
    return this.items
      .map (item => item.value())
      .reduce((previous, current) => previous + current, 0);
  }
}
