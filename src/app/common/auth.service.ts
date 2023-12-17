import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {UserRol} from "../modelos/usuario/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;

  constructor(private router: Router) { }

  login(email: string, password: string): boolean {
    // Simulación de autenticación y obtención de token
    if (email === 'a@a.com' && password === '123') {
      this.token = 'token_anfitrion';
      sessionStorage.setItem('token', this.token);
      sessionStorage.setItem('roles', JSON.stringify(['anfitrion']));
      this.router.navigate(['/anfitrion']);
      return true;
    } else if(email === 'h@h.com' && password === '123'){
      this.token = 'token_huesped';
      sessionStorage.setItem('token', this.token);
      sessionStorage.setItem('roles', JSON.stringify(['huesped']));
      this.router.navigate(['/huesped']);
      return true;
    } else {
      return false;
    }
  }

  getToken(): string | null {
    return this.token;
  }

  logout(): void {
    // Simulación de cierre de sesión
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('roles');
  }
  getRoles(): UserRol[] {
    return JSON.parse(sessionStorage['roles'] || '[]');
  }
}
