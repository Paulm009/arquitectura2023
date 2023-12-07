import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
    formBuilder = TestBed.inject(FormBuilder);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit(); 
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('dberia crear el formulario y contener user y password', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm instanceof FormGroup).toBe(true);

    expect(component.loginForm.get('username')).toBeDefined();
    expect(component.loginForm.get('password')).toBeDefined();
  });

  it('deberia lanzar una accion al presionar un boton', () => {
    spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('deberia ser inválido inicialmente', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('deberia ser válido cuando los campos son completados', () => {
    const usernameInput = component.loginForm.controls['username'];
    const passwordInput = component.loginForm.controls['password'];
    usernameInput.setValue('usuario');
    passwordInput.setValue('contraseña');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('deberia loguear los datos del formulario cuando se envía', () => {
    spyOn(console, 'log');
    const username = 'usuario';
    const password = 'contraseña';
    component.loginForm.setValue({ username, password });
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith('Username:', username);
    expect(console.log).toHaveBeenCalledWith('Password:', password);
  });

  it('deberia mostrar error cuando el formulario es inválido y se intenta enviar', () => {
    spyOn(console, 'log');
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith('Formulario inválido');
  });

});
