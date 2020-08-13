import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UserService} from './core/user/user.service';
import {User} from './core/user/user.interface';
import {Router} from '@angular/router';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 title = 'bike-app-front';

 constructor(private router: Router) {
   if (localStorage.getItem('user')) {
     this.router.navigate(['/dashboard']);
   }
 }

  ngOnInit(): void {
  }

}
