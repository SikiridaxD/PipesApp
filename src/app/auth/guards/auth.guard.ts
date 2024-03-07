import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, 
         CanActivateFn, 
         CanMatchFn, 
         Route, 
         UrlSegment, 
         RouterStateSnapshot, 
         Router} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';



const checkAuthStatus = (): Observable<boolean> => {
   const authService: AuthService = inject(AuthService);
   const router: Router = inject(Router);
  
   return authService.checkAuthenticationStatus()
   .pipe(
     tap( (isAuthenticated) => console.log( 'Aunthenticated: ', isAuthenticated ) ),
     tap((isAuthenticated) => {
       if (!isAuthenticated) {
         router.navigate(['/auth/login']);
        }
    }),
   );
 }
         

export const canMatchGuard: 
CanMatchFn = (route: Route, 
              segments: UrlSegment[]) => {
        // console.log('CanMatch');
        // console.log({route,segments});
        return checkAuthStatus();
}
    
    
export const canActivateGuard: 
CanActivateFn = (route: ActivatedRouteSnapshot, 
                 state: RouterStateSnapshot) => {
    // console.log('CanActivate');
    // console.log({route,state});
    return checkAuthStatus();
}