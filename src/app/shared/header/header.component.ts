import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../core/user/user.interface';
import {AuthService} from '../../auth/auth.service';
import {Router} from "@angular/router";

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
  clickToggle(status: boolean): void {
    /*this.toggle = !this.toggle;*/
    this.toggleChange.emit(!status)
  }
}
