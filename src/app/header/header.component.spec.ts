import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <nav class="nav">
        <a href="/">Inicio</a>
        <a href="/listaCategoria">Categorias</a>
        <a href="/listaPlanta">Plantas</a>
        <a href="/donacion">Donacion</a>
      </nav>
      <div class="search">
        <a class="logo" href="/login">
          <img src="../../assets/icons/admin.png" alt="icono admin">
        </a>
      </div>
    </header>
  `
})
class HeaderComponent {}

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
  });

  it('debería tener un header con la clase "header"', () => {
    const headerElement = fixture.nativeElement.querySelector('header.header');
    expect(headerElement).toBeTruthy();
  });

  it('debería contener un elemento de navegación', () => {
    const navElement = fixture.nativeElement.querySelector('.header .nav');
    expect(navElement).toBeTruthy();
  });

  it('debería tener enlaces a las páginas de navegación', () => {
    const navigationLinks = fixture.nativeElement.querySelectorAll('.header .nav a');
    expect(navigationLinks.length).toBe(4); 
  });

  it('debería tener un enlace a la página de Inicio', () => {
    const inicioLink = fixture.nativeElement.querySelector('.header .nav a[href="/"]');
    expect(inicioLink.textContent).toBe('Inicio');
  });

  it('debería tener un enlace a la página de Categorías', () => {
    const categoriasLink = fixture.nativeElement.querySelector('.header .nav a[href="/listaCategoria"]');
    expect(categoriasLink.textContent).toBe('Categorias');
  });

  it('debería tener un enlace a la página de Plantas', () => {
    const plantasLink = fixture.nativeElement.querySelector('.header .nav a[href="/listaPlanta"]');
    expect(plantasLink.textContent).toBe('Plantas');
  });

  it('debería tener un enlace a la página de Donación', () => {
    const donacionLink = fixture.nativeElement.querySelector('.header .nav a[href="/donacion"]');
    expect(donacionLink.textContent).toBe('Donacion'); 
  });

  it('debería tener un enlace al login con el logo', () => {
    const logoLink = fixture.nativeElement.querySelector('.header .search a.logo[href="/login"]');
    expect(logoLink).toBeTruthy();
    const logoImage = fixture.nativeElement.querySelector('.header .search a.logo img');
    expect(logoImage).toBeTruthy();
    expect(logoImage.alt).toBe('icono admin'); 
  });
});

