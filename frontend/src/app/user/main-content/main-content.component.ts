import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/ApplicationDataStore/Store';
import { CartService } from 'src/app/services/CartService/cart.service';
import { DeactivateFoodService } from 'src/app/services/FoodServices/DeactivateFoodService/deactivate-food.service';
import { DeleteFoodService } from 'src/app/services/FoodServices/DeleteFoodSerive/delete-food.service';
import { GetFoodService } from 'src/app/services/FoodServices/GetFoodService/get-food.service';
import { FoodItem } from 'src/types/foodItem';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit, DoCheck {

  foodItems: FoodItem[];
  filteredItems: FoodItem[];
  @Input() filterId:number;
  @Input() sortId:string;


  baseImagePath = "assets/Images/";

  constructor(  private router : Router, private route: ActivatedRoute , private getFoodService: GetFoodService,
    private store: Store, private toggleService: DeactivateFoodService, private deleteServie: DeleteFoodService,
    private cartService: CartService) {
    this.foodItems = new Array<FoodItem>();
    this.filteredItems = new Array<FoodItem>();
   }

  ngOnInit(): void {

    this.getFoodService.getFoodItems().subscribe({
      next: (data) => {
        data.map( item =>{
          
          item.image_path  = this.baseImagePath+item.image_path;
      
          this.foodItems.push(item);
          this.filteredItems.push(item);
        });
       
      },
      error: (e) => console.log(e)
    });
  }

  ngDoCheck(): void {
    if(this.filterId){
      this.filter();
    }
    if(this.sortId){
      this.sort();
    }
      
  }

  filter(){
    let tempArr = [];
    if(this.filterId){
      this.foodItems.filter(item=>{
        if(item.cusine.id == this.filterId){
          tempArr.push(item);
        }
      })
    }
    this.filteredItems = tempArr;
  }

  sort(){
    let tempArr = [];
    if(this.sortId){
      if(this.sortId == "high"){
        this.filteredItems.sort(this.comparePricesD);
      }else{
        this.filteredItems.sort(this.comparePricesA);
      }
    }

    console.log(this.filteredItems);
  }

  comparePricesA(a:FoodItem, b:FoodItem):number{
    if(a.price < b.price){
      return -1;
    }
    if(a.price > b.price){
      return 1;
    }
    return 0;

  }

  comparePricesD(a:FoodItem, b:FoodItem):number{
    if(a.price > b.price){
      return -1;
    }
    if(a.price < b.price){
      return 1;
    }
    return 0;

  }

  addToCart(item:FoodItem){

    this.cartService.sendMsg(item);
  }

}
