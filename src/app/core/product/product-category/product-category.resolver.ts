import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductInterface} from '../product';
import {ProductService} from '../product.service';

@Injectable()
export class ProductCategoryResolver implements Resolve<ProductInterface>{

  constructor(private productService: ProductService){
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInterface> {
    return this.productService.findAllByProductCategory(route.params.category);
  }
}
