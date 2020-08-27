import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../shopping-cart/services/shopping-cart.service";
import {ShoppingCart} from "../shopping-cart/shopping-cart";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  shoppingCart: ShoppingCart;
  stepNumber: number = 1;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.getProducts().subscribe(response =>{
      this.shoppingCart = response;
    })
  }

  onClickNextStep(step: number) {
    debugger
    this.stepNumber = step + 1;
  }

  onClickBackStep(step: number) {
    debugger
    this.stepNumber = step - 1;
  }
}
