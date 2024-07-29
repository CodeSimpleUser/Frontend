import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpInterceptorFn
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptorFn:HttpInterceptorFn=(request,next):Observable<HttpEvent<unknown>>=>{
  var token = ''
  // if(localStorage!=undefined){
  //   token=localStorage.getItem("token");
  // }
  let newRequest : HttpRequest<any>
  newRequest= request.clone({
    headers: request.headers.set("Authorization","Bearer " + token)
  })
  return next(newRequest);
}