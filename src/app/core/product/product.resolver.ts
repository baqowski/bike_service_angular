import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ProductInterface} from './product';
import {ProductService} from './product.service';
import {Observable} from 'rxjs';

@Injectable()
export class ProductResolver implements Resolve<ProductInterface>{

  constructor(private productService: ProductService){
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInterface> {
    return this.productService.getById(route.params.id);
  }
}
