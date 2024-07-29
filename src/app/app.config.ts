import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Router } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { AuthGuard } from './guards/signin.guard';
import { forCookieInterceptorFn } from './interceptors/for-cookie.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { authInterceptorFn } from './interceptors/auth.interceptor';
import { corsRequestInterceptorFn } from './interceptors/http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withInterceptors([forCookieInterceptorFn,authInterceptorFn,corsRequestInterceptorFn]),withFetch()),
    provideAnimations(),
    provideToastr(),
    AuthGuard,
    [CookieService],
  ],
};
