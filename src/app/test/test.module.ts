import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestChildComponent} from './test-child/test-child.component';
import {TestRoutingModule} from './test-routing.module';
import {ProductService} from '../core/product/product.service';
import {TestResolver} from './test.resolver';
import {TestComponent} from './test.component';



@NgModule({
  declarations: [
    TestComponent,
    TestChildComponent,
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  providers: [
    ProductService,
    TestResolver
  ]
})
export class TestModule { }
