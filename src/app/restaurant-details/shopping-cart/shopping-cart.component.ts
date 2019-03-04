import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {

  }

  items (): CartItem[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  addItem (menuItem: MenuItem): void {
    this.shoppingCartService.add(menuItem);
  }

  removeItem (cartItem: CartItem): void {
    this.shoppingCartService.remove(cartItem);
  }

  clear (): void {
    this.shoppingCartService.clear();
  }
}
