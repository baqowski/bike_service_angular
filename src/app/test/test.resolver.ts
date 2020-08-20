import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Product} from '../core/product/product';
import {Observable} from 'rxjs';
import {ProductService} from '../core/product/product.service';

@Injectable()
export class TestResolver implements Resolve<Product>{

  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
    return this.getObservable(route.params.id);
    /*return this.productService.getById(route.params.id);*/
  }

  private getObservable(id: number): Observable<any> {
    return this.productService.getById(id);
  }

}
