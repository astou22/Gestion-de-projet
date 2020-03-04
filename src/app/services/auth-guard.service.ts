import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  // Inject Router so we can hand off the user to the component Page 
  constructor(private router: Router) {}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
 
       if ( sessionStorage.getItem('x-auth') ){
         // Token from the component is avaiable, so the user can pass to the route
         return true
       } else  {
         // Token from the component is not avaible because something went wrong or the user wants to go over the url to the site
         // Hands the user to the component page 
         alert("Vous n'avez pas l'acces à cette page")
         this.router.navigate( ["/home"] );
         return false
 
       }
 
  }
}