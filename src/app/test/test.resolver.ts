import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductService} from '../public/product/product.service';
import {Product} from '../public/product/product';


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
