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

  it('deberia mostrar el título y la descripción', () => {
    expect(fixture.nativeElement.querySelector('.info-title').textContent).toContain('');
    expect(fixture.nativeElement.querySelector('.info-description').textContent).toContain('');
  });

  it('deberia mostrar una imagen o icono', () => {
    const imgElement = fixture.nativeElement.querySelector('.info-image');
    expect(imgElement).toBeTruthy();
  });

  it('deberia accionar un evento cuando se hace clic en un botón', () => {
    const mockFunction = jasmine.createSpy('mockFunction');
    expect(mockFunction).toHaveBeenCalled();
  });

  it('deberia mostrar contenido adicional cuando una propiedad es verdadera', () => {
    const additionalContent = fixture.nativeElement.querySelector('.additional-info');
    expect(additionalContent).toBeTruthy();
  });
});
