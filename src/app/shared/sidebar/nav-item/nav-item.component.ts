import {Component, Input, OnInit} from '@angular/core';
import {SidebarInterface} from '../sidebar.interface';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input() sidebarInterface: SidebarInterface;
  ngOnInit(): void {
  }
}
