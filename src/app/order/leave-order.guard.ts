import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OrderComponent } from './order.component';

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {
  canDeactivate(component: OrderComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot): boolean {
    if (!component.isOrderCompleted()) {
      return window.confirm('Sua compra não foi concluída, deseja realmente sair?');
    } else {
      return true;
    }
  }

}
