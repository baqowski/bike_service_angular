import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';
import {UserService} from './core/user/user.service';
import {User} from './core/user/user';
import {SidebarService} from './shared/sidebar/sidebar.service';
import {SidebarInterface} from './shared/sidebar/sidebar.interface';
import {Role} from './core/role/role';
import {LoginService} from './auth/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  notFoundValue = false;
  toggle = false;
  sidebarNavigation: SidebarInterface[];
  user: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private sidebarService: SidebarService,
              private loginService: LoginService) {

  }

  ngOnInit(): void {
    this.loginService.isLogged.subscribe(() => this.onSetSidebarForUser());

    this.userService.getUserSubject.asObservable().pipe(
      tap(data => this.user = data),
      tap(console.log)
    ).subscribe();

    this.route.data.subscribe(data => {
      this.notFoundValue = data.status;
    });
    this.route.paramMap.pipe().subscribe(value => {
      console.log(value);
    });
    this.onSetSidebarForUser();
  }

  onSetSidebarForUser(): void {
    const user = this.userService.getUserValue();
    if (user) {
      this.userService.onGetUserRoleByUuid(this.userService.getUserValue().uuid)
        .pipe(
          tap((role: Role) => {
            this.sidebarNavigation = this.sidebarService.onGetUserRole(role);
          })
        ).subscribe();
    } else {
      this.sidebarNavigation = this.sidebarService.OnGetDefaultNavigation;
    }
  }

  receiveToggle($event): void {
    this.toggle = $event;
  }

  onGetNotFoundValue($event): void {
    this.notFoundValue = $event;
  }

  ngAfterViewInit(): void {
  }
}
