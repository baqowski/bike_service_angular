import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductResolver} from './product.resolver';
import {ProductRoutingModule} from './product-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductDetailComponent} from './product-detail/product-detail.component';



@NgModule({
  declarations: [
    ProductDetailComponent
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
    ProductResolver
  ]
})
export class ProductModule {
}
