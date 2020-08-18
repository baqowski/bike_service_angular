import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./user/user.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthService} from "../auth/auth.service";
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import {ProductModule} from "./product/product.module";
import {ProductResolver} from "./product/product.resolver";



@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  exports: [
    UserComponent
  ],
  imports: [
    CommonModule,
    ProductModule
  ],
  providers: [
    AuthService,
    ProductResolver
  ]
})
export class CoreModule { }
