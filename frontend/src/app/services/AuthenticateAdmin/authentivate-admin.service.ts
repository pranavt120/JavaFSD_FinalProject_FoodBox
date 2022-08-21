import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/types/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthentivateAdminService {

  url = "http://localhost:8080/api/admin"

  constructor(private http: HttpClient) { }


  getAdmin(id:number): Observable<Admin>{

    return this.http.get<Admin>(this.url+'/'+id);

  }
}
