import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, mergeMap} from 'rxjs/operators';
import {LoginService} from './login.service';
import {UserService} from '../../core/user/user.service';
import {NotificationService} from '../../shared/service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  error = '';
  @Output() isLoggedUser: EventEmitter<any> = new EventEmitter<any>();

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private notificationService: NotificationService,
              private loginService: LoginService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.login(this.form.username.value, this.form.password.value)
      .pipe(
        mergeMap(() => this.userService.getCurrentUser()),
        catchError(err => {
          this.notificationService.onGetErrorMessage(err);
          return err;
        })
      ).subscribe((user) => {
        this.isLoggedUser.emit();
        this.loginService.isLogged.next();
        this.router.navigate(['/dashboard']);
        },
        error => {
          this.error = error;
          this.loading = false;
          this.notificationService.onGetErrMessage(error.type);
        });
  }

  get form(): any {
    return this.loginForm.controls;
  }


  ngAfterViewInit(): void {
  }
}
