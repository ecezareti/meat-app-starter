import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-order-costs',
  templateUrl: './order-costs.component.html'
})
export class OrderCostsComponent implements OnInit {
  @Input () delivery: number;
  @Input () itemsValue: number;

  constructor() { }

  ngOnInit() {
  }

  total (): number {
    return this.delivery + this.itemsValue;
  }
}
