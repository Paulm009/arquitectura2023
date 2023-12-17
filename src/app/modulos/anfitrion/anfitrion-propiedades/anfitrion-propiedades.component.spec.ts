import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { AnfitrionPropiedadesComponent } from './anfitrion-propiedades.component';
import { CategoryService } from 'src/app/service/category.service';
import { of } from 'rxjs';

describe('AnfitrionPropiedadesComponent', () => {
  let component: AnfitrionPropiedadesComponent;
  let fixture: ComponentFixture<AnfitrionPropiedadesComponent>;
  let mockCategoryService: jasmine.SpyObj<CategoryService>;

  beforeEach(async () => {
    mockCategoryService = jasmine.createSpyObj('CategoryService', ['getAll']);

    await TestBed.configureTestingModule({
      declarations: [AnfitrionPropiedadesComponent],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: CategoryService, useValue: mockCategoryService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AnfitrionPropiedadesComponent);
    component = fixture.componentInstance;
  });

  it('debería crear el componente AnfitrionPropiedadesComponent', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar la lista de categorías vacía', () => {
    expect(component.categoria.length).toBe(0);
  });

  it('debería llamar a getCategory al inicializar', () => {
    const getCategorySpy = mockCategoryService.getAll.and.returnValue(of([]));
    fixture.detectChanges();
    expect(getCategorySpy).toHaveBeenCalled();
  });

  it('debería llamar a ngOnDestroy al destruir el componente', () => {
    spyOn(component.categoyInstance, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.categoyInstance.unsubscribe).toHaveBeenCalled();
  });

  it('debería mostrar un botón para añadir categoría', () => {
    const compiled = fixture.nativeElement;
    const addButton = compiled.querySelector('.green-button');
    expect(addButton.textContent.trim()).toBe('eco Añadir Categoria');
  });
  
});
