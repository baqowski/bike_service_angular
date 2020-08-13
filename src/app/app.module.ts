import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserComponent} from './core/user/user.component';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import {AuthInterceptor} from './auth/interceptor';
import { ModalComponent } from './shared/modal/modal.component';
import { TestComponent } from './shared/test/test.component';
import {ModalModule} from './shared/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ModalComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    ModalModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
