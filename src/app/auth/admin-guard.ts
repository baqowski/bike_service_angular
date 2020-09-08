import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from '../core/user/user.service';
import {ToastrService} from 'ngx-toastr';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate {
  constructor(private router: Router,
              private userService: UserService,
              private toastrService: ToastrService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    debugger
    this.userService.onGetUserRoleByUuid(this.userService.getUserValue().uuid).pipe(
      tap((value: any) => {
          if (value.role.name === 'ROLE_ADMIN') {
            return true;
          }
          this.toastrService.error('Brak uprawnień do przeglądania tej treści');
          return false;
        }
      ))
      .subscribe();
  }
}
