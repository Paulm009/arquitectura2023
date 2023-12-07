import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionComponent } from './informacion.component';

describe('InformacionComponent', () => {
  let component: InformacionComponent;
  let fixture: ComponentFixture<InformacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionComponent]
    });
    fixture = TestBed.createComponent(InformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia mostrar el título y la descripción cuando se proporcionan', () => {
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('.info-title');
    const descriptionElement = fixture.nativeElement.querySelector('.info-description');

    expect(titleElement.textContent).toContain('Título de prueba');
    expect(descriptionElement.textContent).toContain('Descripción de prueba');
  });

  it('deberia mostrar una imagen o icono si se proporciona una URL válida', () => {
    const imgElement = fixture.nativeElement.querySelector('.info-image');
    expect(imgElement).toBeTruthy();
  });

  it('deberia ocultar la imagen si no se proporciona una URL válida', () => {
    expect(true).toBeFalsy();
  });

  it('deberia accionar un evento cuando se hace clic en un botón', () => {
    const buttonElement = fixture.nativeElement.querySelector('.info-button');
    expect(true).toBeFalsy();
  });

  it('deberia ocultar el contenido adicional si la propiedad es falsa', () => {
    expect(true).toBeFalsy();
  });

  it('deberia mostrar el contenido adicional si la propiedad es verdadera', () => {
    expect(false).toBeTruthy();
  });

  it('deberia cambiar el estilo de la descripción cuando hay más contenido', () => {
    expect(true).toBeFalsy();
  });

  it('deberia mostrar un mensaje cuando no hay contenido adicional', () => {
    expect(false).toBeTruthy();
  });
});
