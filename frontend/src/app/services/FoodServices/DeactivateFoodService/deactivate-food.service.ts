import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodItem } from 'src/types/foodItem';

@Injectable({
  providedIn: 'root'
})
export class DeactivateFoodService {

  url = "http://localhost:8080/api/foodItem/toggleFoodItem"

  constructor(private http: HttpClient) { }


  toggle(id:number):Observable<FoodItem>{
    return this.http.put<FoodItem>(this.url+'/'+id, null);
  }
}
