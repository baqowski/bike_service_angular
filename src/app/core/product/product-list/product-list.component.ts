import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  @Output() onAddToShoppingBasketEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().pipe(map((result: any) => {
      console.log(result);
      return result._embedded.products;
    }))
      .subscribe(value => {
        this.products = value;
      });
  }

  onClickAddProductToShoppingBasket(row): void {
    this.onAddToShoppingBasketEmitter.next(row);
  }
}
