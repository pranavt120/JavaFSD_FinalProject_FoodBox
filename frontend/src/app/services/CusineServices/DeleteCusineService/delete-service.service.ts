import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cusine } from 'src/types/cusine';

@Injectable({
  providedIn: 'root'
})
export class DeleteServiceService {

  
  url = "http://localhost:8080/api/cusine/removeCusine";

  constructor(private http: HttpClient) { }

  deletCusine(id:number):Observable<String>{

    return this.http.delete<String>(this.url+'/'+id);
  }
}
