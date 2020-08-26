import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() toggle: boolean = true;
  @Output() toggleChange: EventEmitter<any> = new EventEmitter();
  roleName: string;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.roleName = this.authService.currentUserValue.roleName;
  }

  receiveToggle(): void {
    this.toggleChange.emit(this.toggle);
  }

}
