import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {UserService} from '../core/user/user.service';
import {User} from "../core/user/user";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient, private userService: UserService) {
    debugger
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  }

  login(username: string, password: string): Observable<any> {
    debugger
    return this.http.post(environment.apiUrl + '/authorization/login', {username, password})
      .pipe(
        tap(user => localStorage.setItem('user', JSON.stringify(user))),
        tap(user => this.userSubject.next(user))
  )
    ;
  }

  register(user): Observable<any> {
    return this.http.post(environment.apiUrl + '/authorization/register', user, httpOptions).pipe(
      map(value => {
          if (value) {
            return value;
          }
        }, (error: any) => {
          return error;
        }
      )
    );
  }

  logout(): Observable<any> {
    localStorage.removeItem('user');
    this.getUserSubject.next(null);
    return this.http.post(environment.apiUrl + '/api/users/logout', null);

  }

  public get getUserSubject(): BehaviorSubject<User> {
    return this.userSubject;
  }

  getCurrentUser(uuid): void {
    this.userService.getCurrentUser().pipe(
      tap(user => {
        this.userService.current.next(user);
      })
    ).subscribe()
  }
}
