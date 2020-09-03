import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  error = '';
  @Output() isLoggedUser: EventEmitter<any> = new EventEmitter<any>();

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private toasterService: ToastrService) {
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
        tap(response => {
        }),
        catchError(err => {
          this.toasterService.error(err.error);
          return err;
        }))
      .subscribe(next => {
          this.isLoggedUser.emit();
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.error = error;
          this.loading = false;
          this.toasterService.error('Error ' + error);
        });
  }

  get form(): any {
    return this.loginForm.controls;
  }
}
