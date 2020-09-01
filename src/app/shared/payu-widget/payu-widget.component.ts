import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payu-widget',
  templateUrl: './payu-widget.component.html',
  styleUrls: ['./payu-widget.component.scss']
})
export class PayuWidgetComponent implements OnInit {

  @Input() redirectUri;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickPayu() {
    this.router.navigateByUrl('https://stackoverflow.com/');
  }

}
