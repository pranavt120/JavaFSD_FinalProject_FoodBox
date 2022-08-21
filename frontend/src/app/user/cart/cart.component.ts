import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FoodItem } from 'src/types/foodItem';
import {Cart} from 'src/types/Cart';
import { Order } from 'src/types/order';
import { CartService } from 'src/app/services/CartService/cart.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CheckoutServiceService } from 'src/app/services/checkoutService/checkout-service.service';
import { Store } from 'src/app/ApplicationDataStore/Store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

   updated = false;
   item: FoodItem;
   cart: Cart;
   orders: Order[];
   order: Order;

  constructor(private cartService: CartService, private router: Router, private route: ActivatedRoute, 
    private checkoutService: CheckoutServiceService, private store: Store) { 
    this.item = new FoodItem();
    this.cart = new Cart();
    this.orders = new Array<Order>;
  }


  ngOnInit(): void {
    this.cartService.getMsg().subscribe({
      next: (data)=> {
        this.item = data;
        this.addToCart();
      },
      error: (e)=> console.log(e)
    });
  }

  // increaseQuantity(){
  //   this.quantity++;
  // }

  // decreaseQuantity(){
  //   if(!(this.quantity <= 0)){
  //     this.quantity--;
  //   }
    
  // }

  addToCart(){
  
    this.updated = false;
    this.order = new Order();
    this.order.foodItem = new FoodItem();
    
    if(this.orders.length < 1){
      this.order.id = this.item.id;
      this.order.foodItem = this.item;
      this.order.price += this.item.price;
      this.order.quantity = 1;
      this.updated = true;
      this.orders.push(this.order);
      this.cart.order = this.orders;
      this.cart.totalPrice += this.order.price;
      this.cart.quantity += 1;
      
    }else{
      for(let i in this.orders){
        if(this.orders[i].foodItem.id == this.item.id ){
          this.orders[i].price += this.item.price;
          this.orders[i].quantity += 1;
          this.updated = true;
          this.cart.order = this.orders;
          this.cart.totalPrice += this.item.price;
          this.cart.quantity += 1;
          break;
        }
    }   
    }
    

    if(this.updated == false){
        this.order.foodItem = this.item;
        this.order.price = this.item.price;
        this.order.quantity += 1;
        this.orders.push(this.order);
        this.updated = true;
        this.cart.order = this.orders;
        this.cart.totalPrice += this.order.price;
        this.cart.quantity += 1;
    }    

   
  }

  handleCheckOut(){
    // this.checkoutService.sendMsg(this.cart);
    this.store.storage = this.cart;
    this.router.navigate(['../checkout'], {relativeTo:this.route});
  }

}
