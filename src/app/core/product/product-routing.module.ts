import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductResolver} from './product.resolver';
import {ProductDetailComponent} from './detail/product-detail.component';
import {ProductComponent} from './product.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductCategoryResolver} from './product-category/product-category.resolver';
import {ProductDetailResolver} from './detail/product-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    resolve: {
      products: ProductResolver,
      categories: ProductCategoryResolver
    }
  },
  {
    path: 'add',
    component: ProductAddComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent,
    resolve: {
      product : ProductDetailResolver
    }
  },
/*  {
    path: 'search/:category',
    component: ProductCategoryComponent,
    resolve: {
      category: ProductCategoryResolver
    }
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {

}
