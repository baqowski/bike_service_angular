import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';
import {NotFoundComponent} from './shared/not-found/not-found.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  notFoundValue = false;
  toggle = false;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.notFoundValue = data.status;
    });
    this.route.paramMap.pipe().subscribe(value => {
      console.log(value);
    });
  }

  receiveToggle($event): void {
    this.toggle = $event;
  }

  onGetNotFoundValue($event): void {
    this.notFoundValue = $event;
  }

  ngAfterViewInit(): void {
  }
}
