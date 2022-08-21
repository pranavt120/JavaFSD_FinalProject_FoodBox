import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/types/customer';

@Injectable({
  providedIn: 'root'
})
export class GetCustomerService {

  url = "http://localhost:8080/api/customers";

  constructor(private http: HttpClient) { }

  login(name:string, pass:string):Observable<Customer>{

      return this.http.post<Customer>(this.url+'/login/'+name, pass);
  }

  register(customer:Customer):Observable<Customer>{

    return this.http.post<Customer>(this.url+'/register', customer);
  }
}
