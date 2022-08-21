import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cusine } from 'src/types/cusine';

@Injectable({
  providedIn: 'root'
})
export class ListCusineService {

  url = "http://localhost:8080/api/cusine/";

  constructor(private http: HttpClient) { }

  getCusines():Observable<Cusine[]>{

    return this.http.get<Cusine[]>(this.url);
  }
}
