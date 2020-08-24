import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../product/product';
import {ShoppingCardService} from '../shopping-card.service';
import {first, map} from 'rxjs/operators';

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

  constructor(private shoppingCardService: ShoppingCardService) {
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
    this.product.count = product.count + 1;
    this.shoppingCardService.updateProduct(product)
      .subscribe(response => {
        this.onCountEmitter.emit(response);
      });
  }

  onClickEmitDecreaseCountProduct(product: Product): void {
    this.product.count = product.count - 1;
    if (this.product.count > 0) {
      debugger
      this.shoppingCardService.updateProduct(this.product)
        .subscribe(response => {
          this.onCountEmitter.emit(response);
        });
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
