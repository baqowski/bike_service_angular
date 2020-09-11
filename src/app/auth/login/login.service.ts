import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {UserInterface} from '../../core/user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogged = new Subject<UserInterface>();

  get getIsLogged(): Subject<UserInterface> {
    return this.isLogged;
  }
}
