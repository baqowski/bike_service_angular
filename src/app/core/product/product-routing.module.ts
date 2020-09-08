import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductResolver} from './product.resolver';
import {DetailComponent} from './detail/detail.component';
import {ProductComponent} from './product.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductCategoryComponent} from './product-category/product-category.component';
import {ProductCategoryResolver} from './product-category/product-category.resolver';
import {ProductDetailResolver} from './detail/product-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    resolve: {
      products: ProductResolver,
    },
    /*canActivate: [AdminGuard]*/
  },
  {
    path: 'add',
    component: ProductAddComponent
  },
  {
    path: ':id',
    component: DetailComponent,
    resolve: {
      product : ProductDetailResolver
    }
  },
  {
    path: 'search/:category',
    component: ProductCategoryComponent,
    resolve: {
      category: ProductCategoryResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {

}
