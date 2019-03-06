import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderCostsComponent } from './order-costs/order-costs.component';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
  { path: '', component: OrderComponent}
];

@NgModule ({
  declarations: [
    OrderComponent,
    OrderCostsComponent,
    OrderItemsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class OrderModule {

}
