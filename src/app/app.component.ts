import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {UserService} from './core/user/user.service';
import {User} from './core/user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  notFoundValue = false;
  toggle = false;
  user: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) {

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
