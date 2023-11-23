import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia contener una sección para información de contacto', () => {
    expect(fixture.nativeElement.querySelector('.contact-section')).toBeTruthy();
  });

  it('debería tener una sección para enlaces a redes sociales.', () => {
    expect(fixture.nativeElement.querySelector('.social-media-section')).toBeTruthy();
  });

  it('deberia mostrar el correo electrónico de contacto', () => {
    expect(fixture.nativeElement.querySelector('.contact-email').textContent).toContain('example@email.com');
  });

  it('deberia mostrar el número de teléfono de contacto', () => {
    expect(fixture.nativeElement.querySelector('.contact-phone').textContent).toContain('123-456-7890');
  });

  it('deberia activar una acción cuando se hace clic en un enlace de una red social', () => {
    const mockClickFunction = jasmine.createSpy('mockClickFunction');
    expect(mockClickFunction).toHaveBeenCalled();
  });
});
