import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ProductInterface} from '../../core/product/product';
import {ProductService} from '../../core/product/product.service';
import {Observable} from 'rxjs';
import {catchError, tap} from "rxjs/operators";
import {NotificationService} from "../../shared/service/notification.service";


@Injectable()
export class ProductsCategoryResolver implements Resolve<ProductInterface[]> {

  constructor(private productService: ProductService, private notificationService: NotificationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInterface[]> {
    debugger
    return this.productService.findAllByProductCategory(route.params.category).pipe(
      tap(value =>  value),
      catchError(err => {
        this.notificationService.onGetErrorMessage(err)
        return err;
      })
    );

  }
}
