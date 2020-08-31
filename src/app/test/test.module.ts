import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestChildComponent} from './test-child/test-child.component';
import {TestRoutingModule} from './test-routing.module';
import {TestResolver} from './test.resolver';
import {TestComponent} from './test.component';
import {ProductService} from '../public/product/product.service';



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
