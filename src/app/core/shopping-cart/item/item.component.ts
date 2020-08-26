import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../product/product';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {ProductShoppingCartService} from "../services/product-shopping-cart.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() product: Product;
  @Output() onRemove: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCountEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() onGoToProduct: EventEmitter<any> = new EventEmitter<any>();

  constructor(private shoppingCardService: ShoppingCartService,
              private productShoppingCartService: ProductShoppingCartService) {
  }

  ngOnInit(): void {

  }

  remove(): void {
    this.onRemove.emit();
  }

  goToProduct(id: number): void {
    this.onGoToProduct.next(id);
  }

  onClickEmitIncrementCountProduct(product: Product): void {
    debugger
    this.product.count = product.count + 1;
    this.emitProduct(product)

  }

  private emitProduct(product: Product) {
    this.productShoppingCartService.create(product)
      .subscribe(response => {
        debugger
        this.onCountEmitter.emit(response);
      });
  }

  onClickEmitDecreaseCountProduct(product: Product): void {
    this.product.count = product.count - 1;
    if (this.product.count > 0) {
      this.emitProduct(product)
    }
    if (this.product.count === 0) {
      debugger
      this.shoppingCardService.deleteProduct(this.product)
        .subscribe(response => {
          this.onCountEmitter.emit(response);
        });
    }
  }
}
