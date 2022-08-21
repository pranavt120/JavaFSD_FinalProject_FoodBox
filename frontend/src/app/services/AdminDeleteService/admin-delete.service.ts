import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDeleteService {

  url = "http://localhost:8080/api/admin/delete";

  constructor(private http: HttpClient) { }

  deleteAdmin(id:number):Observable<any>{
    console.log('dsafsdaf',id);
    console.log(this.url+'/'+id);
    return this.http.delete<String>(this.url+'/'+id, {observe: 'response'});
  }
}
