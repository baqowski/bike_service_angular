import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../core/user/user.service';
import {SidebarService} from './sidebar.service';
import {SidebarInterface} from './sidebar.interface';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() toggle = true;
  @Output() toggleChange: EventEmitter<any> = new EventEmitter();
  listOfSidebarData: SidebarInterface[];

  constructor(private userService: UserService,
              private sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.userService.onGetUserRoleByUuid(this.userService.getUserValue().uuid)
      .pipe(
        map(user => user.authorities),
        tap(role => {
          this.listOfSidebarData = this.sidebarService.onGetUserRole(role.shift());
        })
      ).subscribe();
  }
}
