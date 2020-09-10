import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../core/user/user';
import {Router} from '@angular/router';
import {UserService} from '../../core/user/user.service';
import {tap} from 'rxjs/operators';
import {LoginService} from '../../auth/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() toggle: boolean;
  @Output() toggleChange: EventEmitter<any> = new EventEmitter();
  @Input() user: User;

  constructor(private router: Router,
              private userService: UserService,
              private auth: AuthService,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  onLogout(): void {
    debugger
    this.auth.logout().pipe(
      tap(() => {
        this.loginService.isLogged.next();
      }),
      tap(() => {
        this.router.navigate(['/home']);
      })
    ).subscribe();
  }

  clickToggle(status: boolean): void {
    this.toggleChange.emit(!status);
  }

  /* private initShoppingCard(): void {
     this.shoppingCardService.getProducts().subscribe(value => {
       this.shoppingCard = value;
     });
   }*/
}
