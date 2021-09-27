import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( private http: HttpClient ) { }
  login(data:any):Observable<any> {
    return this.http.post('https://reqres.in/api/login', data);
  }

  getUpdateData(info:any ) {
    //console.log(info.Id)
    return this.http.put('https://reqres.in/api/users/'+info.Id, info);    
  }

  deleteData(del:any ) {
    //console.log(info.Id)
    return this.http.delete('https://reqres.in/api/users/'+del.id, del);    
  }
}
