import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cart } from 'src/types/Cart';

@Injectable({
  providedIn: 'root'
})
export class CheckoutServiceService {


  subject = new Subject<Cart>();

  constructor() { }


  sendMsg(cartItem: Cart){
    this.subject.next(cartItem);
  }

  getMsg():Observable<Cart>{
    return this.subject.asObservable();
  }

}
