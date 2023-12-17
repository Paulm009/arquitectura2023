import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CabeceraComponent } from './cabecera.component';

describe('CabeceraComponent', () => {
  let component: CabeceraComponent;
  let fixture: ComponentFixture<CabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería mostrar el título en la plantilla HTML', () => {
    component.titulo = 'Ejemplo de título';
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const title = element.querySelector('h1');
    expect(title?.textContent).toContain('Ejemplo de título');
  });

  it('debería mostrar el título en negrita en la plantilla HTML', () => {
    component.titulo = 'Ejemplo de título';
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const title = element.querySelector('h1');
    expect(title?.querySelector('b')).toBeTruthy();
  });

  it('debería inicializarse el componente correctamente', () => {
    expect(component).toBeTruthy();
    expect(component.queryParams).toBeNull();
    expect(component.titulo).toEqual('');
  });
});
