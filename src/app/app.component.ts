import {Component, OnInit} from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faCoffee = faCoffee;
  toggle = false;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe().subscribe(value => {
      console.log(value);
    });
  }

  receiveToggle($event): void {
    this.toggle = $event;
  }
}
