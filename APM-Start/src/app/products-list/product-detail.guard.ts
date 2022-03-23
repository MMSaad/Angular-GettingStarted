import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var id = Number(route.params['id']);
    if (isNaN(id) || id < 1) {
      alert('Invalid product Id');
      // start a new navigation to redirect to list page
      this.router.navigate(['/products']);
      // abort current navigation
      return false;
    }
    return true;
  }
  
}
