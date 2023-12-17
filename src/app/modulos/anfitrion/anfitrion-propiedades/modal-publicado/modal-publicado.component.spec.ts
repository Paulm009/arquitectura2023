import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalPublicadoComponent } from './modal-publicado.component';

describe('ModalPublicadoComponent', () => {
  let component: ModalPublicadoComponent;
  let fixture: ComponentFixture<ModalPublicadoComponent>;
  let matDialogRefSpy: jasmine.SpyObj<MatDialogRef<ModalPublicadoComponent>>;

  beforeEach(() => {
    const dialogMock = jasmine.createSpyObj('MatDialogRef', ['close']);

    TestBed.configureTestingModule({
      declarations: [ModalPublicadoComponent],
      providers: [{ provide: MatDialogRef, useValue: dialogMock }]
    }).compileComponents();

    matDialogRefSpy = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<ModalPublicadoComponent>>;
    fixture = TestBed.createComponent(ModalPublicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente ModalPublicadoComponent', () => {
    expect(component).toBeTruthy();
  });

  it('debería cerrar el modal y confirmar la publicación al llamar confirmarPublicar()', () => {
    component.confirmarPublicar();
    expect(matDialogRefSpy.close).toHaveBeenCalledWith(true);
  });

  it('debería cerrar el modal sin confirmar la publicación al llamar cerrarModal()', () => {
    component.cerrarModal();
    expect(matDialogRefSpy.close).toHaveBeenCalledWith(false);
  });

  it('debería mostrar el título "Publicar propiedad"', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('h2');
    expect(titleElement.textContent).toContain('Publicar propiedad');
  });

  it('debería mostrar el texto "¿Estás seguro de que deseas publicar?"', () => {
    const contentElement: HTMLElement = fixture.nativeElement.querySelector('h3');
    expect(contentElement.textContent).toContain('¿Estás seguro de que deseas publicar?');
  });

  it('debería contener un botón de "Cancelar"', () => {
    const cancelButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[mat-dialog-close]');
    expect(cancelButton).toBeTruthy();
    expect(cancelButton.innerText).toContain('Cancelar');
  });
  
  it('debería contener un botón de "Publicar"', () => {
    const buttonElements: HTMLButtonElement[] = fixture.nativeElement.querySelectorAll('button');
    const publishButton = Array.from(buttonElements).find(button => button.innerText === 'Publicar');
    expect(publishButton).toBeTruthy();
  });
  
});
