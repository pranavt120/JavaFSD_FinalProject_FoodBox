import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/types/Cart';
import { Store } from '../ApplicationDataStore/Store';
import { CheckoutServiceService } from '../services/checkoutService/checkout-service.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  cartItem:Cart;

  constructor(private checkoutService: CheckoutServiceService, private route: ActivatedRoute, private store: Store) { 
    this.cartItem = new Cart();
  }

  ngOnInit(): void {

      this.cartItem = this.store.storage;
      console.log(this.cartItem);
    
    // this.checkoutService.getMsg().subscribe({
    //   next: (data)=>{
    //     this.cartItem = data;
    //      console.log(this.cartItem);
    //      window.location.reload();
    //   } ,
    //   error: (e)=> console.log(e)
    // });
  }

}
