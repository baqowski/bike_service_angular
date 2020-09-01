import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../core/user/user';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {UserService} from '../../core/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() toggle: boolean;
  @Output() toggleChange: EventEmitter<any> = new EventEmitter();
  user: User;

  constructor(private router: Router,
              private userService: UserService,
              private auth: AuthService) {
  }

  ngOnInit(): void {
    this.userService.getUserSubject.asObservable().pipe(
      tap(data => this.user = data)
    ).subscribe();
  }

  onLogout(): void {
    debugger
    this.auth.logout().subscribe(() => {
      debugger
      localStorage.removeItem('user');
      this.userService.getUserSubject.next(null);
      this.router.navigate(['/']);
    }, error => {

    });
  }
  clickToggle(status: boolean): void {
    this.toggleChange.emit(!status);
  }

 /* private initShoppingCard(): void {
    this.shoppingCardService.getProducts().subscribe(value => {
      debugger
      this.shoppingCard = value;
    });
  }*/
}
