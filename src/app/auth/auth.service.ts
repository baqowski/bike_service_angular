import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../core/user/user.interface';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from "../../environments/environment";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this._currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    console.log(this._currentUserSubject)
  }

  login(username: string, password: string) {
    return this.http.post(environment.apiUrl + '/authorization/login', {username, password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }));
  }

  register(user): Observable<any> {
    return this.http.post(environment.apiUrl + '/authorization/register', user, httpOptions).pipe(
      map(value => {
          if (value) {
            return value
          }
        }, (error: any) => {
          return error
        }
      )
    );
  }

  logout() {
    return this.http.post(environment.apiUrl + '/user/logout', null);
  }

  public get currentUserValue(): User {
    return this._currentUserSubject.value;
  }

  public get currentUserSubject(): BehaviorSubject<User> {
    return this._currentUserSubject;
  }
}
