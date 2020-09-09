import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ProductInterface} from '../../core/product/product';
import {ProductService} from '../../core/product/product.service';
import {Observable} from 'rxjs';


@Injectable()
export class ProductsCategoryResolver implements Resolve<ProductInterface[]>{

  constructor(private productService: ProductService){
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInterface[]> {
    return this.productService.findAllByProductCategory(route.params.category);
  }
}
