import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthService} from '../auth/auth.service';
import {ProductComponent} from './product/product.component';
import {ProductModule} from './product/product.module';
import {ProductResolver} from './product/product.resolver';
import {ItemComponent} from './shopping-cart/item/item.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    ProductComponent,
    ItemComponent
  ],
  exports: [
    UserComponent,
    DashboardComponent,
    ProductComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    RouterModule,
    FormsModule,
    /*SharedModule*/
  ],
  providers: [
    AuthService,
    ProductResolver
  ]
})
export class CoreModule {
}
