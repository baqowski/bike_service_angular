import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductResolver} from "./product.resolver";
import {ProductRoutingModule} from "./product-routing.module";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductListComponent} from "./product-list/product-list.component";


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent
  ],
  exports: [
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers: [
    ProductResolver
  ]
})
export class ProductModule { }
