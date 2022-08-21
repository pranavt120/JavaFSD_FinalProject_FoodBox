import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/types/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  url = "http://localhost:8080/api/admin/login";

  constructor(private http: HttpClient) { }


  loginService(form:Admin):Observable<Admin>{

    return this.http.post<Admin>(this.url, form);

  }

}
