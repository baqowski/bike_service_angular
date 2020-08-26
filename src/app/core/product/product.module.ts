import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductResolver} from './product.resolver';
import {ProductRoutingModule} from './product-routing.module';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductAddComponent} from './product-add/product-add.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductAddComponent
  ],
  exports: [
    ProductDetailComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers: [
    ProductResolver
  ]
})
export class ProductModule {
}
