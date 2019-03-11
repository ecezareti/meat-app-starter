import { LoginService } from "./../security/login/login.service";
import { CartItem } from "app/restaurant-details/shopping-cart/cart-item.model";
import { Component, OnInit } from "@angular/core";
import { RadioOption } from "app/shared/radio/radioOption";
import { OrderService } from "./order.service";
import { Order, OrderItem } from "./order.model";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";
import { User } from "app/security/login/user.model";

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html"
})
export class OrderComponent implements OnInit {
  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "DIN" },
    { label: "Cartão Refeição", value: "REF" },
    { label: "Cartão Débito", value: "DEB" }
  ];

  delivery = 2.75;
  orderForm: FormGroup;
  name: string;
  email: string;

  numberPattern = /^[0-9]*$/;
  user: User;

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get("email");
    const emailConfirmation = group.get("emailConfirmation");

    if (!email || !emailConfirmation) {
      return undefined;
    }

    if (email.value !== emailConfirmation.value) {
      return { emailIsNotMatch: true };
    }

    return undefined;
  }

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.user = this.orderService.loggedUser();

    this.orderForm = this.formBuilder.group(
      {
        name: this.formBuilder.control("", [
          Validators.required,
          Validators.minLength(5)
        ]),
        email: this.formBuilder.control("", [
          Validators.required,
          Validators.email
        ]),
        emailConfirmation: this.formBuilder.control("", [
          Validators.required,
          Validators.email
        ]),
        address: this.formBuilder.control("", [
          Validators.required,
          Validators.minLength(5)
        ]),
        number: this.formBuilder.control("", [
          Validators.required,
          Validators.pattern(this.numberPattern)
        ]),
        optionalAddress: this.formBuilder.control(""),
        paymentOption: this.formBuilder.control("", [Validators.required])
      },
      { validator: OrderComponent.equalsTo }
    );
  }

  itemsValue(): number {
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

  removeItem(item: CartItem) {
    this.orderService.removeItem(item);
  }

  hasSuccess(): boolean {
    return this.items().length > 0;
  }

  checkOrder(order: Order) {
    order.orderItems = this.orderService
      .items()
      .map(item => new OrderItem(item.quantity, item.item.id));
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.orderService.clear();
      this.router.navigate(["/order-summary"]);
    });
  }
}
