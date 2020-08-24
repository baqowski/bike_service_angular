import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './product';
import {map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[];
  @Output() onAddToShoppingBasketEmitter: EventEmitter<any> = new EventEmitter<any>();

  /*@Output() onEditProductEmitter: EventEmitter<any> = new EventEmitter<any>();*/

  constructor(private productService: ProductService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
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

  private existInBasket(id: number) {

  }

  onClickDeleteProduct(id: number): void {
    this.productService.delete(id).subscribe(value => {
    }, error => {
      this.toastrService.error(error.error.message, 'Błąd podczas usuwania produktu');
    }, () => {
      this.toastrService.success('Produkt został usunięty');
    });
  }

  onClickUpdateProduct(data): void {
    this.productService.update(data).subscribe(value => {
    }, error => {
    }, () => {
      this.toastrService.success('Produkt został zaktualizowany');
    });
  }
}
