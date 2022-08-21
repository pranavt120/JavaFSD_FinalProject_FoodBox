import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from 'src/app/ApplicationDataStore/Store';
import { UpdateFoodService } from 'src/app/services/FoodServices/UpdateFoodService/update-food.service';
import { Cusine } from 'src/types/cusine';
import { FoodItem } from 'src/types/foodItem';

@Component({
  selector: 'app-update-food-item',
  templateUrl: './update-food-item.component.html',
  styleUrls: ['./update-food-item.component.css']
})
export class UpdateFoodItemComponent implements OnInit {

  foodItem: FoodItem;
  updated: Boolean;
  message:string;

  constructor(private store: Store, private http: HttpClient, private updateService: UpdateFoodService) { 
    this.foodItem = new FoodItem();
    this.foodItem.cusine = new Cusine();
  }

  ngOnInit(): void {
    this.foodItem = this.store.storage;
  }

  handleUpdate(form:NgForm){
    this.foodItem.name = form.value.name;
    this.foodItem.description = form.value.description;
    this.foodItem.price = form.value.price;
    this.foodItem.image_path = form.value.path;
    this.foodItem.cusine.id = form.value.cusineId;
    this.foodItem.status = form.value.status;


    this.updateService.updateService(this.foodItem, this.foodItem.id).subscribe({
      next: (data)=>{
        this.updated = true;
        this.message = "Updated Successfully";
      },
      error: (e)=> {
        this.updated = false;
        this.message = "Something went wrong!";
        console.log(e);}
    });
  }

}
