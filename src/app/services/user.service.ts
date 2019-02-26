import { Injectable } from '@angular/core';
import { User, USERS } from '../clases/users';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.api_url + '/users';

  constructor(private http:HttpClient) { }

  getAll(filtro?: string): Observable<User[]>{
    let url = this.url;
    if ( filtro )  {
      url = url + '?email=' + filtro;
    }
    return this.http.get<User[]>(url);
  }

  getOne(userid?: string): Observable<User[]>{
    let url = this.url;
    if ( userid )  {
      url = url + '?email=' + userid;
    }
    return this.http.get<User[]>(url);
  }
  add (userid?: string): Observable<User[]>{
    let url = this.url;
    if ( userid )  {
      url = url + '/' + userid;
      return this.http.put<User[]>(url,null,{});
    }

    return null;
  }

  edit (userid?: string): Observable<User[]>{
    let url = this.url;
    if ( userid )  {
      url = url + '/' + userid;
      return this.http.patch<User[]>(url,null,{});
    }

    return null;
  }
  delete (userid?: string): Observable<User[]>{
    let url = this.url;
    if ( userid )  {
      url = url + '/' + userid;
      return this.http.delete<User[]>(url);
    }

    return null;
  }
}
