import {Component, OnInit} from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faCoffee = faCoffee;
  toggle: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  receiveToggle($event): void {
    this.toggle = $event;
  }
}
