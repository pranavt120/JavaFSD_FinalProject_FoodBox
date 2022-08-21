import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Store } from 'src/app/ApplicationDataStore/Store';
import { DeactivateFoodService } from 'src/app/services/FoodServices/DeactivateFoodService/deactivate-food.service';
import { DeleteFoodService } from 'src/app/services/FoodServices/DeleteFoodSerive/delete-food.service';
import { GetFoodService } from 'src/app/services/FoodServices/GetFoodService/get-food.service';
import { FoodItem } from 'src/types/foodItem';

@Component({
  selector: 'app-list-food-item',
  templateUrl: './list-food-item.component.html',
  styleUrls: ['./list-food-item.component.scss']
})
export class ListFoodItemComponent implements OnInit {

  foodItems: FoodItem[];

  baseImagePath = "assets/Images/";

  constructor(  private router : Router, private route: ActivatedRoute , private getFoodService: GetFoodService,
    private store: Store, private toggleService: DeactivateFoodService, private deleteServie: DeleteFoodService) {
    this.foodItems = new Array<FoodItem>();
   }

  ngOnInit(): void {
    this.getFoodService.getFoodItems().subscribe({
      next: (data) => {
        data.map( item =>{
          
          item.image_path  = this.baseImagePath+item.image_path;
          console.log(item.image_path);
          this.foodItems.push(item);
        });
        console.log(data)
      },
      error: (e) => console.log(e)
    });
  }


  handleUpdate(id:number){

    this.foodItems.filter(item =>{
      if(item.id === id){
        this.store.storage = item;
        console.log(this.store.storage);
        this.router.navigate(['../updateItem',id],{relativeTo: this.route});
      }
    })

    
  }

  handleDelete(id:number){
    this.deleteServie.delete(id).subscribe({
      next: (a) => console.log(a),
      error:(e)=> console.log(e)
    });

    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

  handleToggle(id:number){
    console.log("toggle method");
    this.toggleService.toggle(id).subscribe({
      next: (data)=>console.log(data),
      error: (e)=>console.log(e)
    });
  }
}
