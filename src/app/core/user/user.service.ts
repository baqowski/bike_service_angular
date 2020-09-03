import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Order} from '../order/order';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from './user';
import {Role} from '../role/role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  }

  getUserOrders(id): Observable<Order[]> {
    return this.http.get<Order[]>(environment.apiUrl + '/api/users/' + id + '/orders');
  }

  getUserByUsername(username): Observable<User> {
    return this.http.get<User>(environment.apiUrl + '/api/users/search/findByUsername?username=' + username);
  }

  findUserOrder(userId, orderId): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/api/users/' + userId + '/orders/' + orderId);
  }

  findUserByUuid(uuid): Observable<User> {
    return this.http.get<User>(environment.apiUrl + '/api/users/search/findByUuid?uuid=' + uuid);
  }

  onGetUserRoleByUuid(uuid): Observable<Role> {
    return this.http.get<Role>(environment.apiUrl + '/api/users/search/findByUuid?uuid=' + uuid + '&projection=role');
  }

  public get getUserSubject(): BehaviorSubject<User> {
    return this.userSubject;
  }


  public getUserValue(): User {
    return this.getUserSubject.value;
  }
}
