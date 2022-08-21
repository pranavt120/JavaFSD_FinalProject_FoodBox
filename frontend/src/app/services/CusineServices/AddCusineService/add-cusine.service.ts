import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cusine } from 'src/types/cusine';

@Injectable({
  providedIn: 'root'
})
export class AddCusineService {

  url = "http://localhost:8080/api/cusine/addCusine";

  constructor(private http: HttpClient) {
   }

   addCusine(cusine:Cusine):Observable<Cusine>{

    return this.http.post<Cusine>(this.url, cusine);
   }
}
