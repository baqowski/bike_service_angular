import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UserInterface} from './user';
import {Role} from '../role/role';
import {AuthService} from '../../auth/auth.service';
import {LoginService} from '../../auth/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  current: UserInterface;
  current$: Observable<UserInterface>;

  constructor(private http: HttpClient,
              private auth: AuthService,
              private loginService: LoginService) {
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

  get onGetCurrentUser(): UserInterface {
    return this.current;
  }
}
