import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddFoodService } from 'src/app/services/FoodServices/AddFoodService/add-food.service';
import { Cusine } from 'src/types/cusine';
import { FoodItem } from 'src/types/foodItem';

@Component({
  selector: 'app-create-food-item',
  templateUrl: './create-food-item.component.html',
  styleUrls: ['./create-food-item.component.css']
})
export class CreateFoodItemComponent implements OnInit {

  foodItem: FoodItem;
  added:Boolean;
  message:string;
  cusine:Cusine;

  constructor(private addFoodService: AddFoodService) {
    this.foodItem = new FoodItem();
    this.cusine = new Cusine();
   }

  ngOnInit(): void {
  }

  handleSubmit(form:NgForm){
   this.foodItem.name = form.value.name;
   this.foodItem.price = form.value.price;
   this.foodItem.description = form.value.description;
   this.foodItem.image_path = form.value.path;
   this.foodItem.cusine = new Cusine();
   this.foodItem.cusine.id = form.value.cusineId;
   if(form.value.status === "true"){
    this.foodItem.status = true;
   }else{
    this.foodItem.status = false;
   }
    
   
   console.log(this.foodItem);
   this.addFoodService.addFood(this.foodItem).subscribe({
    next: (data)=> {
      if(data.id){
        this.added = true;
        this.message = "Addedd Successfully";
      }else{
        this.added = false;
        this.message = "Something went wrong, could not add";
      }
    },
    error: (e)=>{
      console.log(e);
      this.added = false;
      this.message = "Something went wrong, could not add";
    }
   });

  }

}
