import { LoginService } from './../security/login/login.service';
import { Observable } from 'rxjs/Observable';
import { MEET_API } from './../app.api';
import { CartItem } from 'app/restaurant-details/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-details/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'app/security/login/user.model';

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: HttpClient, private loginService: LoginService) { }

  loggedUser(): User {
    return this.loginService.user;
  }

  items(): CartItem[] {
    return this.cartService.items;
  }

  removeItem(item: CartItem) {
    this.cartService.remove(item);
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  checkOrder(order: Order): Observable<string> {
    return this.http
      .post<Order>(`${MEET_API}/orders`, order)
      .map(responseOrder => responseOrder.id);
  }

  clear(): void {
    this.cartService.clear();
  }
}
