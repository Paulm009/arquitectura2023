import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalEliminarComponent } from './modal-eliminar.component';

describe('ModalEliminarComponent', () => {
  let component: ModalEliminarComponent;
  let fixture: ComponentFixture<ModalEliminarComponent>;
  let matDialogRefSpy: jasmine.SpyObj<MatDialogRef<ModalEliminarComponent>>;

  beforeEach(() => {
    const dialogMock = jasmine.createSpyObj('MatDialogRef', ['close']);

    TestBed.configureTestingModule({
      declarations: [ModalEliminarComponent],
      providers: [{ provide: MatDialogRef, useValue: dialogMock }]
    }).compileComponents();

    matDialogRefSpy = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<ModalEliminarComponent>>;
    fixture = TestBed.createComponent(ModalEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente ModalEliminarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('debería cerrar el modal y confirmar eliminación al llamar confirmarEliminar()', () => {
    component.confirmarEliminar();
    expect(matDialogRefSpy.close).toHaveBeenCalledWith(true);
  });

  it('debería cerrar el modal sin confirmar eliminación al llamar cerrarModal()', () => {
    component.cerrarModal();
    expect(matDialogRefSpy.close).toHaveBeenCalledWith(false);
  });

  it('debería mostrar el título "Eliminar propiedad"', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('h2');
    expect(titleElement.textContent).toContain('Eliminar propiedad');
  });

  it('debería mostrar el texto "¿Estás seguro de que deseas eliminar?"', () => {
    const contentElement: HTMLElement = fixture.nativeElement.querySelector('h3');
    expect(contentElement.textContent).toContain('¿Estás seguro de que deseas eliminar?');
  });
});
