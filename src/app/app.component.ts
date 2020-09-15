import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
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
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

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
   /* this.loginService.isLogged.subscribe(() => this.onSetSidebarForUser());*/
   /* const user = this.auth.getUserSubject.value;
    if (user) {
      this.userService.getCurrentUser().pipe(
        tap(x => {
          this.setData(x);
        })
      ).subscribe(value => {
          debugger
        }
      );

      this.check();
      /!*this.auth.getUserSubject.asObservable().pipe(
        mergeMap(x => this.userService.getCurrentUser())
      ).subscribe(user => {
        debugger
        this.user = user;
      });*!/
    }*/
    this.auth.user$.subscribe(value => {
      this.onSetSidebarForUser();
      this.user = value;
    });
   /* this.auth.getUserSubject.asObservable().subscribe(value => {
      debugger;
      console.log(value);
      debugger;
      this.user = value;
      this.sidebarNavigation = this.onGetSidebar(value);

    });
    this.auth.getUserSubject.subscribe(value => {
      debugger

    });*/
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
    /*this.setData(this.user);*/
    this.auth.getUserSubject.asObservable().subscribe(value => {
      this.setLoggedUserData(value);
    });
  }

  setData(user: UserInterface): void {
    if (user) {
      this.userService.getCurrentUser().pipe(
        tap(current => this.user = current),
      ).subscribe();
    } else {
      this.sidebarNavigation = this.sidebarService.OnGetDefaultNavigation;
    }
    this.sidebarNavigation = this.onGetSidebar(user);
  }

  setCurrentLoggedUser(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  check(): void {
    this.auth.getUserSubject.asObservable().subscribe(value => {
    });
  }

  setLoggedUserData(logged): void {
    if (logged) {
      this.userService.getCurrentUser().subscribe(user => {
        this.setData(user);
      });
    }
    this.setData(this.auth.getUserSubject.value);
  }

  ngOnDestroy(): void {
  }

  onSetSidebarForUser(): void {
    const user = this.auth.userSubject.value;
    if (user) {
      this.userService.onGetUserRoleByUuid(user.uuid)
        .pipe(
          tap((role: any) => {
            this.sidebarNavigation = this.sidebarService.onGetUserRole(role);
          })
        ).subscribe();
    } else {
      this.sidebarNavigation = this.sidebarService.OnGetDefaultNavigation;
    }
  }
}
