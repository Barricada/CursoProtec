import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsTemplateComponent } from '../bloque2/components/forms-template/forms-template.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanDeactivate<FormsTemplateComponent>  {
  canDeactivate(
    component: FormsTemplateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {

      if ( component.hasUnsavedChanged() )
        return window.confirm('Do you really to go out?');
      else
      return true;
  }

}
