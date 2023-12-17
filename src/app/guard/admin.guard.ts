import {Injectable} from '@angular/core';
import {CanActivate, CanLoad, Route, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserRol} from "../modelos/usuario/usuario.model";
import {AuthService} from "../common/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(private router: Router,
              private authService: AuthService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loadPermission(['anfitrion', 'huesped']);
  }

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loadPermission(['anfitrion', 'huesped']);
  }

  private loadPermission(allowedRoles: string[]): boolean | UrlTree {
    const roles: UserRol[] = this.authService.getRoles();

    if (roles.length === 0 || !allowedRoles.some(role => roles.includes(role as UserRol))) {
      return this.router.createUrlTree(['/autenticacion']);
    }

    return true;
  }


}
