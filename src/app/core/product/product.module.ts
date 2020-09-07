import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductResolver} from './product.resolver';
import {ProductRoutingModule} from './product-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DetailComponent} from './detail/detail.component';
import {ProductAddComponent} from './product-add/product-add.component';


@NgModule({
  declarations: [
    DetailComponent,
    ProductAddComponent
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
