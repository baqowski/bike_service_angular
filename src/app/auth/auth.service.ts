import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {User} from '../core/user/user';


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
    console.log(this._currentUserSubject);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(environment.apiUrl + '/authorization/login', {username, password})
      .pipe(
        tap(user =>  localStorage.setItem('user', JSON.stringify(user))),
        tap(user => this.currentUserSubject.next(user))
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
