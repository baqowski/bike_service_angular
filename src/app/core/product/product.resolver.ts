import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Product} from "./product";
import {ProductService} from "./product.service";

@Injectable()
export class ProductResolver implements Resolve<Product>{

  constructor(private productService: ProductService){
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger
    return this.productService.getById(route.params.id);
  }


}
