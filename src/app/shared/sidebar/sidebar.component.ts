import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../core/user/user.service';
import {SidebarService} from './sidebar.service';
import {tap} from 'rxjs/operators';
import {SidebarInterface} from './sidebar.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() inputSidebarInterface: SidebarInterface;
  @Input() toggle = true;
  @Output() toggleChange: EventEmitter<any> = new EventEmitter();
  listOfSidebarData: any;
  navigationData: SidebarInterface[];
  trackById: any;

  constructor(private userService: UserService,
              private sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.userService.onGetUserRoleByUuid(this.userService.getUserValue().uuid)
      .pipe(
        tap((role: any) => {
          this.listOfSidebarData = this.sidebarService.onGetUserRole(role.role);
          this.navigationData = this.sidebarService.onGetNavigationUser;
        })
      ).subscribe();
  }
}
