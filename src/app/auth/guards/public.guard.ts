import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, 
         CanActivateFn, 
         CanMatchFn, 
         Route, 
         UrlSegment, 
         RouterStateSnapshot, 
         Router} from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';



const checkAuthStatus = (): Observable<boolean> => {
   const authService: AuthService = inject(AuthService);
   const router: Router = inject(Router);
  
   return authService.checkAuthenticationStatus()
   .pipe(
     tap( (isAuthenticated) => console.log( 'Aunthenticated: ', isAuthenticated ) ),
     tap((isAuthenticated) => {
       if (isAuthenticated) {
         router.navigate(['/heroes/list']);
        }
    }),
     map( isAuthenticated => !isAuthenticated)
   );
 }
         

export const canMatchGuard2: 
CanMatchFn = (route: Route, 
              segments: UrlSegment[]) => {
        // console.log('CanMatch');
        // console.log({route,segments});
        return checkAuthStatus();
}