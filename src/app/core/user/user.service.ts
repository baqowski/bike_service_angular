import {Injectable, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {User} from './user.interface';
import {map} from 'rxjs/operators';

const URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  auth: AuthService) {
  }
  private user: User;

  // tslint:disable-next-line:typedef
  authenticate(username, password) {
    return this.auth.login(username, password).pipe(map(
      user => {
        this.user = user;
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
      }));
  }


}
