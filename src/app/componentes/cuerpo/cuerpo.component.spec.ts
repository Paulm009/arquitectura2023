import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuerpoComponent } from './cuerpo.component';

describe('CuerpoComponent', () => {
  let component: CuerpoComponent;
  let fixture: ComponentFixture<CuerpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería mostrar como "nulo" el contenido no visible', () => {
    component.visible = true;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const content = element.querySelector('ng-content');
    expect(content).toBeNull();
  });

  it('debería ocultar el contenido cuando visible es falso', () => {
    component.visible = false;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const content = element.querySelector('ng-content');
    expect(content).toBeFalsy();
  });

  it('debería tener una clase "ocultar" cuando visible es falso', () => {
    component.visible = false;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const hideClass = element.querySelector('.ocultar');
    expect(hideClass).toBeTruthy();
  });

  it('debería contener un ng-container con ngIf para manejar la visibilidad', () => {
    const element: HTMLElement = fixture.nativeElement;
    const ngContainer = element.querySelector('ng-container');
    expect(ngContainer?.getAttribute('ngIf')).toBeUndefined();
  });
});
