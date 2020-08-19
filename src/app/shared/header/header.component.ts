import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {User} from '../../core/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  user: User;
  products: string[] = [
    'first', 'second', 'third'
  ];


  constructor(private router: Router, private auth: AuthService) {
    this.user = this.auth.currentUserValue;
  }

  ngOnInit(): void {
    /*this.user = this.auth.currentUserValue;
    console.log(this.user)*/
  }

  onLogout(): void {
    this.auth.logout().subscribe(() => {
      localStorage.removeItem('user');
      this.auth.currentUserSubject.next(null);
      this.router.navigate(['/#'])
      location.reload();
    }, error => {

    });
  }
}
