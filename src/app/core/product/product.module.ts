import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductResolver} from './product.resolver';
import {ProductRoutingModule} from './product-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductDetailComponent} from './detail/product-detail.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductCategoryComponent} from './product-category/product-category.component';
import {ProductCategoryResolver} from './product-category/product-category.resolver';
import {ProductDetailResolver} from './detail/product-detail.resolver';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductAddComponent,
    ProductCategoryComponent
  ],
  exports: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductResolver,
    ProductCategoryResolver,
    ProductDetailResolver,
  ]
})
export class ProductModule {
}
