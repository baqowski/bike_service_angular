import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {OrderInterface} from '../order';
import {OrderService} from '../order.service';
import {catchError} from 'rxjs/operators';
import {NotificationService} from "../../../shared/service/notification.service";

@Injectable()
export class OrderDetailResolver implements Resolve<OrderInterface> {


  constructor(private orderService: OrderService,
              private notificationService: NotificationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<OrderInterface> {
    debugger
    return this.orderService.findById(route.params.orderId).pipe(
      catchError(err => {
        this.notificationService.onGetErrorMessage(err);
        return err;
      })
    );
  }

}
