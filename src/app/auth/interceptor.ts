import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from '../core/user/user.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = this.userService.currentUserValue;
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(request);
  }
}
