import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
 cart = [];
 quantity = [
  {value: '1', viewValue: '1'},
  {value: '2', viewValue: '2'},
  {value: '3', viewValue: '3'}
];
  constructor(private cartService: CartService) { 
    this.cartService.getCarts().subscribe(res=>{
      this.cart = res;
    });
  }

  ngOnInit() {
  }

}
