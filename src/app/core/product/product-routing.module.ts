import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductResolver} from './product.resolver';
import {DetailComponent} from './detail/detail.component';
import {ProductComponent} from './product.component';
import {ProductAddComponent} from './product-add/product-add.component';


const routes: Routes = [
  {
    path: '',
    component: ProductComponent,

  },
  {
    path: 'add',
    component: ProductAddComponent
  },
  {
    path: ':id',
    component: DetailComponent,
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
