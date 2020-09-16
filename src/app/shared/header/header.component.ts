import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {UserInterface} from '../../core/user/user';
import {Router} from '@angular/router';
import {UserService} from '../../core/user/user.service';
import {LoginService} from '../../auth/login/login.service';
import {NotificationService} from '../service/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @Input() toggle: boolean;
  @Output() toggleChange: EventEmitter<any> = new EventEmitter();
  @Input() user: UserInterface;

  constructor(private router: Router,
              private userService: UserService,
              private auth: AuthService,
              private notificationService: NotificationService,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.auth.logout().pipe(
    ).subscribe(() => {
      this.router.navigate(['/'])
    }, error => {

    }, () => {
      localStorage.removeItem('user');
    });
  }

  clickToggle(status: boolean): void {
    this.toggleChange.emit(!status);
  }

  ngAfterViewInit(): void {
  }

  /* private initShoppingCard(): void {
     this.shoppingCardService.getProducts().subscribe(value => {
       this.shoppingCard = value;
     });
   }*/
}
