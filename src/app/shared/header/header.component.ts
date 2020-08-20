import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/auth.service';

import {User} from '../../core/user/user';
import {Router} from '@angular/router';
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() toggle: boolean;
  @Output() toggleChange: EventEmitter<any> = new EventEmitter();

  user: User;

  constructor(private router: Router, private auth: AuthService) {
    this.user = this.auth.currentUserValue;
  }

  ngOnInit(): void {
    this.auth.currentUserSubject.asObservable().pipe(
      tap(data => this.user = data)
    ).subscribe()
  }


  onLogout(): void {
    this.auth.logout().subscribe(() => {
      localStorage.removeItem('user');
      this.auth.currentUserSubject.next(null);
      this.router.navigate(['/']);
      /*location.reload();*/
    }, error => {

    });
  }
  clickToggle(status: boolean): void {
    this.toggleChange.emit(!status);
  }
}
