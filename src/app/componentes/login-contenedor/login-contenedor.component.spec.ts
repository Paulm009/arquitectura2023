import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { LoginContenedorComponent } from './login-contenedor.component';

describe('LoginContenedorComponent', () => {
  let component: LoginContenedorComponent;
  let fixture: ComponentFixture<LoginContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginContenedorComponent],
      imports: [MatToolbarModule, MatButtonModule, RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería renderizar el mat-toolbar', () => {
    const toolbar = fixture.debugElement.query(By.css('mat-toolbar'));
    expect(toolbar).toBeTruthy();
  });

  it('debería tener un botón para "Inicio"', () => {
    const inicioButton = fixture.debugElement.query(By.css('mat-toolbar button[routerLink="/home-page"]'));
    expect(inicioButton).toBeTruthy();
  });

  it('debería tener un botón para "Categorías"', () => {
    const categoriasButton = fixture.debugElement.query(By.css('mat-toolbar button[routerLink="/home-page/listaCategoria"]'));
    expect(categoriasButton).toBeTruthy();
  });

  it('debería tener un botón para "Plantas"', () => {
    const plantasButton = fixture.debugElement.query(By.css('mat-toolbar button[routerLink="/home-page/plantas"]'));
    expect(plantasButton).toBeTruthy();
  });

  it('debería tener un botón para "Videos"', () => {
    const videosButton = fixture.debugElement.query(By.css('mat-toolbar button[routerLink="/home-page/videos"]'));
    expect(videosButton).toBeTruthy();
  });

  it('debería tener un botón para "Donación"', () => {
    const donacionButton = fixture.debugElement.query(By.css('mat-toolbar button[routerLink="/home-page/donacion"]'));
    expect(donacionButton).toBeTruthy();
  });

  it('debería tener un botón para la página de "Login"', () => {
    const loginButton = fixture.debugElement.query(By.css('mat-toolbar button[routerLink="/home-page/login"]'));
    expect(loginButton).toBeTruthy();
  });

  it('debería contener una sección de "cuerpo"', () => {
    const cuerpo = fixture.debugElement.query(By.css('.cuerpo'));
    expect(cuerpo).toBeTruthy();
  });
});
