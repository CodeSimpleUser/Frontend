import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router,private toastrService:ToastrService) { }
    canActivate(
      next: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot) 
      {
      return this.isSignedIn();
      }
    isSignedIn(): Observable<boolean> {
        return this.authService.isSignedIn().pipe(
            map((isSignedIn) => {
                if (!isSignedIn) {
                  this.toastrService.error("You should login");
                    this.router.navigate(['signin']);
                    return false;
                }
                return true;
            }));
    }
}
