import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../core/user/user.interface';
import {UserService} from '../../core/user/user.service';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {ModalService} from '../modal/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  user: User;
  @Input() id: string;
  bodyText: string;

  constructor(private userService: UserService, private auth: AuthService) {
    /*if (localStorage.getItem('user')) {
      this.user = this.userService.currentUserValue;
    }*/
  }

  ngOnInit(): void {
    this.user = this.userService.currentUserValue;
  }

  onLogout(): void {
    this.auth.logout().subscribe(() => {
      localStorage.removeItem('user');
      window.location.reload();
    });
  }
}
