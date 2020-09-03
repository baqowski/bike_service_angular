import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingCartService} from '../shopping-cart.service';
import {Product} from '../../product/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() product: Product;
  @Output() onRemove: EventEmitter<any> = new EventEmitter<any>();
  @Output() onGoToProduct: EventEmitter<any> = new EventEmitter<any>();

  constructor(private shoppingCardService: ShoppingCartService) {
  }

  remove(): void {
    this.onRemove.emit();
  }

  onClickEmitIncrementCountProduct(product, event): void {
    event.preventDefault();
    event.stopPropagation();
    this.shoppingCardService.increaseCount(product);
  }

  onClickEmitDecrementCountProduct(product, event): void {
    event.preventDefault();
    event.stopPropagation();
    this.shoppingCardService.decreaseCount(product);
    if (product.quantity === 0) {
      this.remove();
    }
  }
}
