import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHandlerFn, HttpHeaders, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';


export const forCookieInterceptorFn:HttpInterceptorFn =
(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>=>{
  
  let headers = new HttpHeaders();

  // add previously added headers
  const keys = request.headers.keys();
  if (keys.length > 0) {
    keys.forEach(x => {
      headers = headers.append(x, request.headers.get(x) ?? '');
    })
  }
  const authReq = request.clone({ headers: headers, withCredentials: true });
  // Pass on the cloned request instead of the original request.
  return next(authReq);
}