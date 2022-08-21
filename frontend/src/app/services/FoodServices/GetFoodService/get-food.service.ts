import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodItem } from 'src/types/foodItem';

@Injectable({
  providedIn: 'root'
})
export class GetFoodService {

  url = "http://localhost:8080/api/foodItem";

  constructor(private http: HttpClient) { }

  getFoodItems():Observable<FoodItem[]>{
    return this.http.get<FoodItem[]>(this.url);
  }
}
