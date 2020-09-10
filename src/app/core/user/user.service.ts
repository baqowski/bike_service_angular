import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from './user';
import {Role} from '../role/role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  current: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
  }

  findUserOrders(uuid): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/api/orders/search/findAllByUser_Uuid?uuid=' + uuid + '&projection=full');
  }

  getUserOrderById(uuid, orderId): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/api/users/' + uuid + '/orders/' + orderId);
  }

  onGetUserRoleByUuid(uuid): Observable<Role> {
    return this.http.get<Role>(environment.apiUrl + '/api/users/search/findByUuid?uuid=' + uuid + '&projection=role');
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(environment.apiUrl + '/api/users/current');
  }

  public get getUserSubject(): BehaviorSubject<User> {
    return this.current
  }

  public getUserValue(): User {
    return this.getUserSubject.value;
  }
}
