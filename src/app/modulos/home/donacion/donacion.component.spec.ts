import { DonacionComponent } from './donacion.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('DonacionComponent', () => {
  let component: DonacionComponent;
  let fixture: ComponentFixture<DonacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonacionComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar una imagen', () => {
    const imageElement = fixture.debugElement.query(By.css('img'));
    expect(imageElement).toBeTruthy();
    expect(imageElement.nativeElement.getAttribute('src')).toBe('assets/img/qr.jpg');
    expect(imageElement.nativeElement.getAttribute('alt')).toBe('Descripción de la imagen');
  });

  it('debería mostrar un mensaje de dedicatoria', () => {
    const dedicationElement = fixture.nativeElement.querySelector('.dedicatoria p');
    expect(dedicationElement.textContent.trim()).toBeTruthy();
  });

});

