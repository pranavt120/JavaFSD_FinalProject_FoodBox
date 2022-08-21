import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cusine } from 'src/types/cusine';

@Injectable({
  providedIn: 'root'
})
export class UpdateCusineService {

  url = "http://localhost:8080/api/cusine/updateCusine";

  constructor(private http: HttpClient) { }

  update(id:number, cusine:Cusine):Observable<Cusine>{

    return this.http.put<Cusine>(this.url+'/'+id, cusine);
  }
}
