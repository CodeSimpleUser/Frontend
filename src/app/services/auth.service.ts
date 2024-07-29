import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { RegisterModule } from '../models/registerModule';
import { Token } from '@angular/compiler';
import { catchError, map, Observable, of } from 'rxjs';
import { userInfo, UserInfo } from 'node:os';
import { UserClaim } from '../models/userclaim';
import { signinModule } from '../models/signinModule';
import { CookieModel } from '../models/cookie';
import { SCResponse } from '../models/SCResponse';
import {ajax } from 'rxjs/ajax'
import { error } from 'node:console';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  apiUrl = 'https://localhost:5001/api/auth/'
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }
  register(registerModule:RegisterModule){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",registerModule)
  }
  SignIn(loginModel:LoginModel){
    return this.httpClient.post<boolean>(this.apiUrl+'signin',loginModel,{observe:'response'})
  }

  signOut(){
    return this.httpClient.get(this.apiUrl+'signout');
  }
  user(){
    return this.httpClient.get<UserClaim[]>(this.apiUrl+'user');
  }
  isSignedIn(): Observable<boolean> {
      return this.user().pipe(
        map((userClaim) => {
          const hasClaims = userClaim.length > 0;
          return hasClaims ? true:false;
        }),
        catchError((error) => {
          return of(false);
        }));
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
} 
