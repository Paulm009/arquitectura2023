import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BibliotecaVideosComponent } from './biblioteca-videos.component';

describe('BibliotecaVideosComponent', () => {
  let component: BibliotecaVideosComponent;
  let fixture: ComponentFixture<BibliotecaVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(!component).toBeTruthy();
  });

  it('deberia tener un titulo', () => {
    expect(component).toBeDefined();
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

  it('deberia obtener el tipo de video correcto', () => {
    const mockFunction = jasmine.createSpy('mockFunction');
    expect(mockFunction).toHaveBeenCalled();
  });

  it('deberia mostrar correctamento los videos en tipo matriz', () => {
    const mockFunction = jasmine.createSpy('mockFunction');
    expect(mockFunction).toHaveBeenCalled();
  });
});
