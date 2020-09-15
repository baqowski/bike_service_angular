import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {SidebarInterface} from './sidebar.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit{

  @Input() toggle = true;
  @Output() toggleChange: EventEmitter<any> = new EventEmitter();
  @Input() listOfSidebarData: SidebarInterface[];

  ngAfterViewInit(): void {
    debugger;
  }
}
