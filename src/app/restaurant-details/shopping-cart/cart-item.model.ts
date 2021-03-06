import { MenuItem } from 'app/restaurant-details/menu-item/menu-item.model';

export class CartItem {
  constructor (public item: MenuItem, public quantity = 1) {

  }

  value (): number {
    return this.item.price * this.quantity;
  }
}
