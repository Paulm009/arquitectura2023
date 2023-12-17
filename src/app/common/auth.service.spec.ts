import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  it('debería crear el servicio AuthService', () => {
    expect(service).toBeTruthy();
  });

  it('debería inicializar el token en nulo', () => {
    const token = service.getToken();
    expect(token).toBeNull();
  });

  it('debería establecer el token para el anfitrión', () => {
    service['token'] = 'token_anfitrion';
    const token = service.getToken();
    expect(token).toBe('token_anfitrion');
  });

  it('debería establecer el token para el huésped', () => {
    service['token'] = 'token_huesped';
    const token = service.getToken();
    expect(token).toBe('token_huesped');
  });

  it('debería obtener el token al cerrar sesión', () => {
    service['token'] = 'token_anfitrion';
    const token = service.getToken();
    expect(token).toBe('token_anfitrion');
  });
});
