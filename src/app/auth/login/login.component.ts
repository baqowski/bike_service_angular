import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../../core/user/user.service';
import {User} from '../../core/user/user.interface';
import {BodyComponent} from '../../shared/modal/body/body.component';

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
  user: User;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private userService: UserService) {
   /* if (this.userService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }*/
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.login(this.form.username.value, this.form.password.value)
      .subscribe(next  => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.error = error;
          this.loading = false;
          this.toastr.error('Error ' + error.toString());
        });
  }

  // tslint:disable-next-line:typedef
  get form() {
    return this.loginForm.controls;
  }
}
