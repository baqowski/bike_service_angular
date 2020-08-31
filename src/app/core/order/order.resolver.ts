import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Order} from './order';
import {OrderService} from './order.service';
import {catchError, filter, takeWhile, tap} from 'rxjs/operators';
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
    return this.orderService.getById(route.params.id).pipe(
      catchError(err => {
        this.toastrService.error('Nie znaleziono zamówienia o podanym id: ' + route.params.id, err.status);
        return err;
      })
    );
  }
}
