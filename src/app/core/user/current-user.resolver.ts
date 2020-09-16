import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {catchError} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {UserInterface} from './user';

import {UserService} from './user.service';

@Injectable()
export class CurrentUserResolver implements Resolve<UserInterface> {


  constructor(private userService: UserService,
              private toastrService: ToastrService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.userService.getCurrentUser().pipe(
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
