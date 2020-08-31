import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {NotFoundService} from './not-found.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  @Input() status;

  constructor(private route: ActivatedRoute, private router: Router, private notFoundService: NotFoundService) {
  }

  ngOnInit(): void {
    console.log(this.status);
  }

  get getStatus(): boolean {
    return this.status;
  }
}
