import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';
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
  notFoundValue = false;
  toggle = false;
  sidebarNavigation: SidebarInterface[];
  user: UserInterface;

  ngOnInit(): void {
    this.loginService.isLogged.subscribe((value) => {
      debugger
      this.onGetSidebar(value);
      this.user = value;
    });

    this.auth.getUserSubject.asObservable().pipe(
      tap(data => this.user = data),
      tap(console.log),
    ).subscribe(value => {
      this.user = value;
    });

    this.route.data.subscribe(data => {
      this.notFoundValue = data.status;
    });
    this.route.paramMap.pipe().subscribe(value => {
      console.log(value);
    });
  }

  onGetSidebar(user: UserInterface): SidebarInterface[] {
    return (user) ? this.sidebarService.onGetUserRole(user) : this.sidebarService.OnGetDefaultNavigation;
  }

  receiveToggle(isHidden): void {
    this.toggle = isHidden;
  }

  ngAfterViewInit(): void {

  }

  setData(user: UserInterface): void {
    debugger;
    this.user = user;
    this.sidebarNavigation = this.onGetSidebar(user);
  }
}
