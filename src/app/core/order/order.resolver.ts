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
    return this.userService.findUserOrder(this.userService.getUserValue().uuid, route.params.id).pipe(
      catchError(err => {
        this.toastrService.error(err.message, err.status);
        return err;
      })
    );
  /*  return this.orderService.getById(route.params.id).pipe(
      catchError(err => {
        this.toastrService.error('Nie znaleziono zamówienia o podanym id: ' + route.params.id, err.status);
        return err;
      })
    );*/

    /*let selectedUser;
    this.userService.findUserByUuid(this.userService.getUserValue().uuid)
      .subscribe((user: User) => {
        selectedUser = user;
      });
// pobrany user po UUID => selectedUser {}

    if (selectedUser) {
      debugger
      if (selectedUser.authorities.find(el => el.name === 'ROLE_USER')) {
        this.userService.findUserOrder(this.userService.getUserValue().id, route.params.id).subscribe(order => {
          debugger
        });
      } else {
        return this.orderService.getById(route.params.id).pipe(
          catchError(err => {
            this.toastrService.error('Nie znaleziono zamówienia o podanym id: ' + route.params.id, err.status);
            return err;
          })
        );
      }
    }*/
  }

  /* private getUserId(): number {
     this.userService.
   }*/

}
