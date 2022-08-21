import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from 'src/types/admin';

@Injectable({
  providedIn: 'root'
})
export class ListAdminService {

  url = "http://localhost:8080/api/admin";

  constructor(private http : HttpClient) { }

  getAdminList():Observable<Admin[]>{
    return this.http.get<Admin[]>(this.url);
  }
}
