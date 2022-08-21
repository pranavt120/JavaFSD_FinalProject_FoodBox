import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteFoodService {

  url = "http://localhost:8080/api/foodItem/deleteFoodItem";

  constructor(private http: HttpClient) { }

  delete(id:number):Observable<String>{
    return this.http.delete<String>(this.url+'/'+id);
  }
}
