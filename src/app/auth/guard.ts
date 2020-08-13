import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from '../core/user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService) { }

  // tslint:disable-next-line:typedef
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = localStorage.getItem('user');
    if (currentUser) {
      // logged in so return true
      this.router.navigate(['/dashboard']);
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;
  }
}
