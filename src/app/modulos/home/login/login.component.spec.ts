import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../common/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceStub: Partial<AuthService>;

  beforeEach(async () => {
    authServiceStub = {
      login: (email: string, password: string) => email === 'user@example.com' && password === 'password123',
      getToken: () => 'dummyToken123'
    };

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: AuthService, useValue: authServiceStub }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería iniciar sesión correctamente', () => {
    component.formulario.setValue({ email: 'user@example.com', password: 'password123' });
    spyOn(console, 'log');
    component.login();
    expect(console.log).toHaveBeenCalledWith('Token:', 'dummyToken123');
  });

  it('debería manejar un inicio de sesión incorrecto', () => {
    component.formulario.setValue({ email: 'incorrect@example.com', password: 'incorrectPassword' });
    spyOn(console, 'log');
    component.login();
    expect(console.log).toHaveBeenCalledWith('Inicio de sesión fallido');
  });

});
