import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ''
})
class MockHeaderComponent {}

@Component({
  selector: 'app-donacion',
  template: `
    <app-header></app-header>
    <div class="background"></div>
    <section class="home">
      <div class="content"></div>
      <div class="login">
        <div class="dedicatoria">
          <p class="descripcion">Al ser un donante, no solo te conviertes en un guardián de nuestro parque...</p>
        </div>
      </div>
    </section>
  `
})
class DonacionComponent {}

describe('DonacionComponent', () => {
  let fixture: ComponentFixture<DonacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonacionComponent, MockHeaderComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionComponent);
    fixture.detectChanges();
  });

  it('debería tener un encabezado', () => {
    const headerElement = fixture.nativeElement.querySelector('app-header');
    expect(headerElement).toBeTruthy();
  });

  it('debería tener un fondo', () => {
    const backgroundElement = fixture.nativeElement.querySelector('.background');
    expect(backgroundElement).toBeTruthy();
  });

  it('debería contener una sección principal', () => {
    const homeSection = fixture.nativeElement.querySelector('.home');
    expect(homeSection).toBeTruthy();
  });

  it('debería tener áreas para contenido y login', () => {
    const contentElement = fixture.nativeElement.querySelector('.content');
    const loginElement = fixture.nativeElement.querySelector('.login');

    expect(contentElement).toBeTruthy();
    expect(loginElement).toBeTruthy();
  });

  it('debería tener un mensaje de descripción visible', () => {
    const descripcionElement = fixture.nativeElement.querySelector('.descripcion');
    expect(descripcionElement).toBeTruthy();
    expect(descripcionElement.textContent.trim().length).toBeGreaterThan(0);
  });

  it('debería tener un párrafo con la clase "dedicatoria"', () => {
    const dedicatoriaElement = fixture.nativeElement.querySelector('.dedicatoria');
    expect(dedicatoriaElement).toBeTruthy();
  });

  it('debería verificar que el texto de descripción es el esperado', () => {
    const descripcionElement = fixture.nativeElement.querySelector('.descripcion');
    const expectedText = 'Al ser un donante, no solo te conviertes en un guardián de nuestro parque...';
    expect(descripcionElement.textContent.trim()).toBe(expectedText);
  });
});
