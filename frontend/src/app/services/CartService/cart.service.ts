import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FoodItem } from 'src/types/foodItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  subject = new Subject<FoodItem>();

  constructor() { }

  sendMsg(item:FoodItem){
    this.subject.next(item);
  }

  getMsg():Observable<FoodItem>{
    return this.subject.asObservable();
  }
}
