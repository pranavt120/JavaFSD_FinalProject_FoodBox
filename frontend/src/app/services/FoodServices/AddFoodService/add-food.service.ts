import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodItem } from 'src/types/foodItem';

@Injectable({
  providedIn: 'root'
})
export class AddFoodService {

  url = "http://localhost:8080/api/foodItem/addFoodItem";

  constructor(private http: HttpClient) { }

  addFood(foodItem:FoodItem):Observable<FoodItem>{
    return this.http.post<FoodItem>(this.url,foodItem);
  }
}
