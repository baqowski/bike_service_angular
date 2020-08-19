import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() toggle: boolean = true;
  @Output() toggleChange: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

  receiveToggle(): void {
    this.toggleChange.emit(this.toggle);
  }

}
