import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';

export interface IsDirty {
    isDirty(): boolean | Observable<boolean>;
}

@Injectable({
    providedIn:'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<IsDirty> {

    canDeactivate(component: LoginComponent): boolean {
        if (component.isDirty) {
          return confirm('Are you sure?');
        }
        return true;
      }
}