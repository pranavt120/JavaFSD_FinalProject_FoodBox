import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { FoodItem } from 'src/types/foodItem';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, DoCheck {

  filter: number;
  sort:string;
  cartItem:FoodItem;

  constructor() { 
    this.cartItem = new FoodItem();
  }

  ngOnInit(): void {
   
  }

  ngDoCheck(){
    
  }

  populateFilter( $event:any){
    this.filter = $event;

  }

  populateSort($event:any){
    this.sort = $event;
  }

  addToCart($event:any){
    this.cartItem = $event;
  }

}
