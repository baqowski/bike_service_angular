import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UserInterface} from './user';
import {Role} from '../role/role';
import {AuthService} from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  current: BehaviorSubject<UserInterface>;

  constructor(private http: HttpClient,
              private auth: AuthService) {
    debugger
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

  getCurrentUser(): Observable<UserInterface> {
    return this.http.get<UserInterface>(environment.apiUrl + '/api/users/current');
  }

  public get getUserSubject(): BehaviorSubject<UserInterface> {
    debugger
    return this.current;
  }

  onSet(): void {
  }

  public getUserValue(): UserInterface {
    return this.getUserSubject.value;
  }
}
