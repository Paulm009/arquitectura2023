import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContenedorComponent } from './contenedor.component';

describe('ContenedorComponent', () => {
  let component: ContenedorComponent;
  let fixture: ComponentFixture<ContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería mostrar el contenido cuando visible es verdadero', () => {
    component.visible = true;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const content = element.querySelector('.content-card');
    expect(content).toBeTruthy();
  });

  it('debería ocultar el contenido cuando visible es falso', () => {
    component.visible = false;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const content = element.querySelector('.content-card');
    expect(content).toBeFalsy();
  });

  it('debería tener una clase "ocultar" cuando visible es falso', () => {
    component.visible = false;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const hideClass = element.querySelector('.ocultar');
    expect(hideClass).toBeTruthy();
  });

  it('debería tener la clase "background-color" en el contenedor principal', () => {
    const element: HTMLElement = fixture.nativeElement;
    const mainContainer = element.querySelector('.background-color');
    expect(mainContainer).toBeTruthy();
  });

  it('debería manejar la visibilidad con ngIf', () => {
    component.visible = true;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
  
    const contentCard = element.querySelector('.content-card');
    expect(contentCard).toBeTruthy();
  
    const hiddenDiv = element.querySelector('.ocultar');
    expect(hiddenDiv).toBeFalsy();
  });
});
