import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Order} from './order';
import {OrderService} from './order.service';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../../auth/auth.service';
import {NotificationService} from "../../shared/service/notification.service";

@Injectable()
export class OrderResolver implements Resolve<Order> {


  constructor(private orderService: OrderService,
              private notificationService: NotificationService,
              private authService: AuthService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order> {
    return this.orderService.findAllByUserUuid(this.authService.getUserSubject.value.uuid).pipe(
      catchError(err => {
        this.notificationService.onGetErrorMessage(err);
        return err;
      })
    );
  }

}
