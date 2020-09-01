import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingCartService} from '../shopping-cart.service';
import {Product} from '../../product/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() product: Product;
  @Output() onRemove: EventEmitter<any> = new EventEmitter<any>();
  @Output() onGoToProduct: EventEmitter<any> = new EventEmitter<any>();

  constructor(private shoppingCardService: ShoppingCartService) {
  }

  ngOnInit(): void {
  }

  remove(): void {
    this.onRemove.emit();
  }

  goToProduct(id: number): void {
    this.onGoToProduct.next(id);
  }

  onClickEmitIncrementCountProduct(product, event): void {
    event.stopPropagation();
    this.shoppingCardService.increaseCount(product);
  }

  onClickEmitDecrementCountProduct(product): void {
    this.shoppingCardService.decreaseCount(product);
  }
}
