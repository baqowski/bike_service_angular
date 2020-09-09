import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {ProductModule} from '../core/product/product.module';
import {ProductComponent} from '../core/product/product.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsCategoryComponent} from './products-categories/products-category.component';


@NgModule({
  declarations: [
    ProductComponent,
    HomeComponent,
    ProductsCategoryComponent
  ],
  exports: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ProductModule,
    RouterModule
  ]
})
export class PublicModule { }
