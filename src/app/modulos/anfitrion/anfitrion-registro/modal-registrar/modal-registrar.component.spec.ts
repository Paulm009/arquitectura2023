import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalRegistrarComponent } from './modal-registrar.component';

describe('ModalRegistrarComponent', () => {
  let component: ModalRegistrarComponent;
  let fixture: ComponentFixture<ModalRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalRegistrarComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente ModalRegistrarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar un mensaje de confirmación', () => {
    const compiled = fixture.nativeElement;
    const confirmationMessage = compiled.querySelector('h3').textContent.trim();
    expect(confirmationMessage).toBe('¿Estás seguro de guardar tu propiedad con los datos seleccionados?');
  });

  it('debería mostrar un botón de "Cancelar"', () => {
    const compiled = fixture.nativeElement;
    const cancelButton = compiled.querySelector('button[color="warn"]');
    expect(cancelButton.textContent.trim()).toBe('Cancelar');
  });

  it('debería mostrar un botón de "Aceptar"', () => {
    const compiled = fixture.nativeElement;
    const acceptButton = compiled.querySelector('button[mat-raised-button]');
    expect(acceptButton.textContent.trim()).toBe('Aceptar');
  });
});
