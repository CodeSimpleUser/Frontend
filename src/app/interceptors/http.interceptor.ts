import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpHandlerFn,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

export const corsRequestInterceptorFn:HttpInterceptorFn=(req,next):Observable<HttpEvent<unknown>>=>{
  req = req.clone({
    withCredentials: true,
  });

  return next(req);
}