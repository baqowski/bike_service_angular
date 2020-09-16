import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthInterceptor} from './auth/interceptor';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {OrderModule} from './core/order/order.module';
import {PublicModule} from './public/public.module';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {LoginService} from './auth/login/login.service';
import {ProductsCategoryResolver} from './public/products-categories/products-category.resolver';
import {ProductsCategoryComponent} from './public/products-categories/products-category.component';
import {AuthService} from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ProductsCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularSvgIconModule.forRoot(),
    ToastrModule.forRoot(),
    OrderModule,
    AuthModule,
    CoreModule,
    SharedModule,
    PublicModule
  ],
  providers: [
    LoginService,
    AuthService,
    ProductsCategoryResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
