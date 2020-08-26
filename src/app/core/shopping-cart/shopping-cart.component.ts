import {Component, OnInit} from '@angular/core';
import {Product} from '../product/product';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ShoppingCartService} from './services/shopping-cart.service';
import {ShoppingCart} from "./shopping-cart";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private http: HttpClient,
              private shoppingCardService: ShoppingCartService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) {
  }

  shoppingCart: ShoppingCart;
  products: Product[] = [];
  total: number;

  ngOnInit(): void {
    this.shoppingCardService.getProducts()
      .subscribe(value => {
        this.products = value.products;
        this.total = value.amount;
        this.shoppingCart = value;
      });
  }

  removeProduct(product: Product): void {
    this.products = this.products.filter(i => i !== product);
  }

  goToProduct(id: number): void {
    this.router.navigate(['test/' + id], {relativeTo: this.activatedRoute});
  }

  receiveChangeFromEmitter(product: Product): void {
    if (product.count === 0) {
      this.removeProduct(product);
    }
    this.shoppingCardService.getAmount().subscribe(response => {
      this.total = response;
    });
  }


  /*  refreshData(): void {
      this.shoppingCardService.getProducts().subscribe(data => {
        this.products = data.products;
        this.total = data.total;
      });
    }*/

  /*  public getProducts(): Observable<Product[]> {
      debugger
      return this.basketService.getProducts().pipe(
        first()).subscribe(value => this.products = value)
    )*/

}
