import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductResolver} from './product.resolver';
import {ProductRoutingModule} from './product-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DetailComponent} from './detail/detail.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductCategoryComponent} from './product-category/product-category.component';


@NgModule({
  declarations: [
    DetailComponent,
    ProductAddComponent,
    ProductCategoryComponent
  ],
  exports: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductResolver
  ]
})
export class ProductModule {
}
