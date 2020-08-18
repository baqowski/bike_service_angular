import {Component, OnInit} from '@angular/core';
import {Product} from "../../core/product/product";
import {HttpClient} from "@angular/common/http";
import {BasketService} from "./basket.service";
import {Observable} from "rxjs";
import {first, map} from "rxjs/operators";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  products: Product[] = [];

  constructor(private http: HttpClient, private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.basketService.getProducts()
      .pipe(first())
      .subscribe(value => this.products = value);
  }

  removeProduct(product: Product) {
    this.products = this.products.filter(i => i !== product);
  }

/*  public getProducts(): Observable<Product[]> {
    debugger
    return this.basketService.getProducts().pipe(
      first()).subscribe(value => this.products = value)
  )*/
}



