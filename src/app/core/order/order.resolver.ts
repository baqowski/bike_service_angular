import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Order} from './order';
import {OrderService} from './order.service';
import {catchError} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../auth/auth.service';
import {UserService} from '../user/user.service';

@Injectable()
export class OrderResolver implements Resolve<Order> {


  constructor(private orderService: OrderService,
              private toastrService: ToastrService,
              private authService: AuthService,
              private router: Router,
              private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order> {
    return this.userService.findUserOrders(this.userService.getUserValue().uuid).pipe(
      catchError(err => {
        this.toastrService.error(err.error.status + ' ' + err.error.error, err.error.message);
        return err;
      })
    );
  /*  return this.userService.findUserOrder(this.userService.getUserValue().uuid, route.params.id).pipe(
      catchError(err => {
        this.toastrService.error(err.message, err.status);
        return err;
      })
    );*/

  }

}
