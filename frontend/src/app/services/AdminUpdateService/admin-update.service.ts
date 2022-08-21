import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/types/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminUpdateService {


  url = "http://localhost:8080/api/admin/update";

  constructor(private http : HttpClient) { }

  updateAdmin(admin:Admin, id:number): Observable<HttpResponse<Admin>>{
    return this.http.put<Admin>(this.url+'/'+id,admin, {observe: 'response'});
  }
}
