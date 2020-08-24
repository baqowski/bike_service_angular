import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  /*ngOnInit(): void {
    this.productService.getAll().pipe(map((result: any) => {
      console.log(result);
      return result._embedded.products;
    }))
      .subscribe(value => {
        this.products = value;
        this.products.forEach(product => product.isEditable = false);
      });
  }

  onClickAddProductToShoppingBasket(data): void {
    this.onAddToShoppingBasketEmitter.next(data);
  }

  onClickEditProduct(data): void {
    this.onEditProductEmitter.next(data);
  }*/

}
