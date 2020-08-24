import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product/product';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {ShoppingCardService} from './shopping-card.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})
export class ShoppingCardComponent implements OnInit {

  constructor(private http: HttpClient,
              private shoppingCardService: ShoppingCardService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  products: Product[] = [];
  total: number;

  ngOnInit(): void {
    this.shoppingCardService.getProducts()
      .pipe(tap(data => {
      }))
      .subscribe(value => {
        this.products = value.products;
        this.total = value.total;
        /* this.shoppingCard.amount = value.amount;
         this.shoppingCard.products = value.products;*/
        /*this.amount = value;*/
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
    this.shoppingCardService.get().subscribe(response => {
      debugger
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
