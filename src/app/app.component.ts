import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from './core/user/user.service';
import {UserInterface} from './core/user/user';
import {SidebarService} from './shared/sidebar/sidebar.service';
import {SidebarInterface} from './shared/sidebar/sidebar.interface';
import {LoginService} from './auth/login/login.service';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private sidebarService: SidebarService,
              private auth: AuthService,
              private loginService: LoginService) {
  }

  toggle = false;
  sidebarNavigation: SidebarInterface[];
  user: UserInterface;

  ngOnInit(): void {
    this.auth.userSubject.asObservable().subscribe(user => this.getCurrentUser(user));

    this.route.paramMap.pipe().subscribe(value => {
      console.log(value);
    });
  }

  onGetSidebar(user: UserInterface): SidebarInterface[] {
    return (user) ? this.sidebarService.onGetUserRole(user) : this.sidebarService.OnGetDefaultNavigation;
  }

  getCurrentUser(user): void {
    if (user) {
      this.userService.getCurrentUser().subscribe(value => this.setData(value))
    } else {
      this.setData(user)
    }
  }

  receiveToggle(isHidden): void {
    this.toggle = isHidden;
  }

  ngAfterViewInit(): void {
  }

  setData(user: UserInterface): void {
    this.user = user;
    this.userService.current = user;
    this.sidebarNavigation = this.onGetSidebar(user);
  }
}
