import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductResolver} from "./product.resolver";
import {ProductRoutingModule} from "./product-routing.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers: [
    ProductResolver
  ]
})
export class ProductModule { }
