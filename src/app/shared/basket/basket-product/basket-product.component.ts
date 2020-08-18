import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../core/product/product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrls: ['./basket-product.component.scss']
})
export class BasketProductComponent implements OnInit {

  @Input() product: Product;
  @Output() onRemove: EventEmitter<any> = new EventEmitter<any>();
  @Output() onGoToProduct: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

  remove() {
    this.onRemove.emit();
  }

  goToProduct(id: number) {
    //debugger
    this.onGoToProduct.next(id);

  }
}
