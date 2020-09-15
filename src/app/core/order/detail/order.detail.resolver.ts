import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {OrderInterface} from '../order';
import {OrderService} from '../order.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../auth/auth.service';
import {UserService} from '../../user/user.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class OrderDetailResolver implements Resolve<OrderInterface> {


  constructor(private orderService: OrderService,
              private toastrService: ToastrService,
              private authService: AuthService,
              private router: Router,
              private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OrderInterface> {
    debugger
    return this.orderService.findOrderByUserUuidAndOrderId(this.userService.onGetCurrentUser.uuid, route.params.orderId).pipe(
      catchError(err => {
        this.toastrService.error(err.error.status + ' ' + err.error.error, err.error.message);
        return err;
      })
    );
  }

}
