import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private _http:HttpClient) { }
  login(username:string='', password:string=''){    
    const userInfo = { un:username, pw:password }
    const headers = new HttpHeaders().set('Content-Type', 'application/json') ;
    return this._http.post('http://localhost:5000/login'
    , JSON.stringify(userInfo) 
    , {headers:headers, responseType: 'text'}
  ) 
  }//login
  thoat() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("username");
}
  
}
