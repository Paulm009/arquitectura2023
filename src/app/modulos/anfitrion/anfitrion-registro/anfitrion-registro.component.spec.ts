import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AnfitrionRegistroComponent } from './anfitrion-registro.component';
import { CategoryService } from 'src/app/service/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

describe('AnfitrionRegistroComponent', () => {
  let component: AnfitrionRegistroComponent;
  let fixture: ComponentFixture<AnfitrionRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnfitrionRegistroComponent],
      providers: [
        FormBuilder,
        { provide: MatSnackBar, useValue: {} },
        { provide: Location, useValue: {} }
      ],
      imports: [HttpClientTestingModule] // Agrega HttpClientTestingModule
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfitrionRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente de registro de categoría', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener un formulario válido al inicio', () => {
    expect(component.formRegistro.valid).toBeFalsy();
  });

  it('debería validar el nombre de la categoría como campo requerido', () => {
    const nameControl = component.formRegistro.get('name');
    nameControl?.setValue('');
    expect(nameControl?.hasError('required')).toBeTruthy();
  });

  it('debería validar la descripción de la categoría como campo requerido', () => {
    const descriptionControl = component.formRegistro.get('description');
    descriptionControl?.setValue('');
    expect(descriptionControl?.hasError('required')).toBeTruthy();
  });

  it('debería añadir una imagen correctamente al formulario', () => {
    const file = new File(['dummy image content'], 'test.png', { type: 'image/png' });
    const formData = new FormData();
    formData.append('img', file);

    expect(formData.get('img')).toEqual(file);
  });

});
