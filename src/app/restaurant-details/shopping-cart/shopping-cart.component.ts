import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';
import {
  trigger,
  style,
  transition,
  state,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations: [
    trigger('row', [
      state('ready', style({ opacity: 1 })),
      transition(
        'void => ready',
        animate(
          '300ms 0ms ease-in',
          keyframes([
            style({ opacity: 0, transform: 'translatex(-30px)', offset: 0 }),
            style({
              opacity: 0.8,
              transform: 'translatex(-10px)',
              offset: 0.8
            }),
            style({ opacity: 1, transform: 'translatex(0px)', offset: 1 })
          ])
        )
      ),
      transition(
        'ready => void',
        animate(
          '300ms 0ms ease-out',
          keyframes([
            style({ opacity: 1, transform: 'translatex(0px)', offset: 0 }),
            style({ opacity: 0.8, transform: 'translatex(10px)', offset: 0.2 }),
            style({ opacity: 1, transform: 'translatex(30px)', offset: 1 })
          ])
        )
      )
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {
  rowState = 'ready';

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() { }

  items(): CartItem[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  addItem(menuItem: MenuItem): void {
    this.shoppingCartService.add(menuItem);
  }

  removeItem(cartItem: CartItem): void {
    this.shoppingCartService.remove(cartItem);
  }

  clear(): void {
    this.shoppingCartService.clear();
  }
}
