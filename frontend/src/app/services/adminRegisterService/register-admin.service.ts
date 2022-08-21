import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Admin } from 'src/types/admin';

@Injectable({
  providedIn: 'root'
})
export class RegisterAdminService {

  private url = "http://localhost:8080/api/admin/register";

  constructor(private http: HttpClient) { }

   registerAdmin(adminData:Admin):Observable<HttpResponse<Admin>>{
     
     return this.http.post<Admin>(this.url,adminData,{observe: 'response'});

  }
}
