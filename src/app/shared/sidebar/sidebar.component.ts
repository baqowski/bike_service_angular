import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../core/user/user.service';
import {SidebarService} from './sidebar.service';
import {SidebarInterface} from './sidebar.interface';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() toggle = true;
  @Output() toggleChange: EventEmitter<any> = new EventEmitter();
  listOfSidebarData: any;

  constructor(private userService: UserService,
              private sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.userService.onGetUserRoleByUuid(this.userService.getUserValue().uuid)
      .pipe(
        tap(role => {
          this.listOfSidebarData = this.sidebarService.onGetUserRole(role.name);
        })
      ).subscribe();
  }
}
