import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../core/user/user.interface';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';

const URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;

  // tslint:disable-next-line:typedef
  login(username: string, password: string) {
    this.http.post(URL + 'authorization/login', {username, password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }));
  }

  constructor(private http: HttpClient, private router: Router) {
   this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
 }

  // tslint:disable-next-line:typedef
  logout() {
   return this.http.post(URL + 'user/logout', null);
  }

  /*// tslint:disable-next-line:typedef
  isLogged() {
   if (localStorage.getItem('user')){
     this.router.navigate(['/dashboard']);
   } else {
     this.router.navigate(['/login']);
   }
  }*/

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  protected get isLogged(): boolean {
    return !!this.currentUserValue;

  }
}
