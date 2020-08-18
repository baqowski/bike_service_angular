import {Injectable, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';

const URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  auth: AuthService) {
  }

}
