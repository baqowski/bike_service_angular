import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';
import {UserService} from './core/user/user.service';
import {User} from './core/user/user';
import {HttpClient} from '@angular/common/http';
import {SidebarService} from './shared/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  notFoundValue = false;
  toggle = false;
  sidebarNavigation: any;
  user: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private sidebarService: SidebarService) {

  }

  ngOnInit(): void {
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
    const user = this.userService.getUserValue();
    if (user) {
      this.userService.onGetUserRoleByUuid(this.userService.getUserValue().uuid)
        .pipe(
          tap(role => {
            this.sidebarNavigation = this.sidebarService.onGetUserRole(role);
          })
        ).subscribe();
    } else {
      this.sidebarNavigation = this.sidebarService.onGetGuestSidebar();
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
