import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Product} from '../../../core/product/product';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrls: ['./basket-product.component.scss']
})
export class BasketProductComponent implements OnInit, OnDestroy {

  faCoffee = faCoffee;
  @Input() product: Product;
  @Output() onRemove: EventEmitter<any> = new EventEmitter<any>();
  @Output() onGoToProduct: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {

  }

  remove(): void {
    this.onRemove.emit();
  }

  goToProduct(id: number): void {
    this.onGoToProduct.next(id);

  }

  ngOnDestroy(): void {
  }
}
