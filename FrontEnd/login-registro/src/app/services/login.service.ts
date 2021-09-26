import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, from } from 'rxjs'
import { Login } from '../models/login'
import {GLOBAL} from './global.service'

@Injectable()
export class LoginService {
  public url:String;
  

  constructor(public _http: HttpClient) {
    this.url=GLOBAL.url
   }

   login(login:Login):Observable<any>{
    let params=JSON.stringify(login);
    return this._http.post(this.url+'login',params)
   }
}
