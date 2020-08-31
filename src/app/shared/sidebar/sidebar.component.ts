import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {UserService} from '../../core/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() toggle = true;
  @Output() toggleChange: EventEmitter<any> = new EventEmitter();
  roleName: string;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    if (this.userService.getUserValue) {
    this.roleName = this.userService.getUserValue.roleName;
    }
  }

  receiveToggle(): void {
    this.toggleChange.emit(this.toggle);
  }

}
