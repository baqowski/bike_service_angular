import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotFoundService implements CanActivate{

  constructor() { }

  // tslint:disable-next-line:max-line-length
  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const expectedStatus = route.data.status;
    if (expectedStatus === true) {
      return true;
    }
    return false;
  }
}
