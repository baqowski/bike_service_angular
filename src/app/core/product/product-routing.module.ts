import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductComponent} from './product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductResolver} from './product.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,

  },
  {
    path: ':id',
    component: ProductDetailComponent,
    resolve: {
      product : ProductResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {

}
