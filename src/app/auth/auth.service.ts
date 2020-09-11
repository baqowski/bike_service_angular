import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {UserInterface} from '../core/user/user';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubject: BehaviorSubject<UserInterface>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<UserInterface>(JSON.parse(localStorage.getItem('user')));
  }

  login(username: string, password: string): Observable<any> {
    debugger
    return this.http.post(environment.apiUrl + '/authorization/login', {username, password})
      .pipe(
        tap(user => localStorage.setItem('user', JSON.stringify(user))),
        tap(user => this.userSubject.next(user))
      );
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
    return this.http.post(environment.apiUrl + '/api/users/logout', null);
  }

  public get getUserSubject(): BehaviorSubject<UserInterface> {
    return this.userSubject;
  }
}
