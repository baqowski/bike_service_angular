import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {UserService} from '../core/user/user.service';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(environment.apiUrl + '/authorization/login', {username, password})
      .pipe(
        tap(user =>  localStorage.setItem('user', JSON.stringify(user))),
        tap(user => this.userService.userSubject.next(user))
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
    debugger
    return this.http.post(environment.apiUrl + '/api/users/logout', null);
  }



}
