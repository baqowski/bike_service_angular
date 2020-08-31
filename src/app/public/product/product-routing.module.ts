import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductResolver} from './product.resolver';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductComponent} from './product.component';


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
