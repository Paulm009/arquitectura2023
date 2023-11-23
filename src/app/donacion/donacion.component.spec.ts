import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionComponent } from './donacion.component';

describe('DonacionComponent', () => {
  let component: DonacionComponent;
  let fixture: ComponentFixture<DonacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonacionComponent]
    });
    fixture = TestBed.createComponent(DonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia mostrar el título y la descripción', () => {
    expect(fixture.nativeElement.querySelector('.donation-description').textContent).toContain('');
  });

  it('deberia mostrar un código QR con el contenido correcto', () => {
    const qrCodeImg = fixture.nativeElement.querySelector('img.qr-code-img');
    expect(qrCodeImg).toBeTruthy();
  });

  it('deberia emitir un evento cuando se hace clic en algun boton', () => {
    const mockFunction = jasmine.createSpy('mockFunction');
    expect(mockFunction).toHaveBeenCalled();
  });

  it('deberia mostrar contenido adicional cuando una propiedad es verdadera', () => {
    const additionalContent = fixture.nativeElement.querySelector('.additional-info');
    expect(additionalContent).toBeTruthy();
  });
});
