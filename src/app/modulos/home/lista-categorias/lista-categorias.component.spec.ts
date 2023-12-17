import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCategoriasComponent } from './lista-categorias.component';
import { CategoryService } from 'src/app/service/category.service';
import { of } from 'rxjs';

describe('ListaCategoriasComponent', () => {
  let component: ListaCategoriasComponent;
  let fixture: ComponentFixture<ListaCategoriasComponent>;
  let categoryServiceStub: Partial<CategoryService>;

  beforeEach(async () => {
    categoryServiceStub = {
      getAll: () => of([{ id: 1, name: 'Category 1', description: 'Description 1', img: 'image1.jpg' }])
    };

    await TestBed.configureTestingModule({
      declarations: [ListaCategoriasComponent],
      providers: [{ provide: CategoryService, useValue: categoryServiceStub }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar las categorías en el HTML', () => {
    component.categoria = [
      { id: 1, name: 'Category 1', description: 'Description 1', img: 'image1.jpg' },
      { id: 2, name: 'Category 2', description: 'Description 2', img: 'image2.jpg' }
    ];
    fixture.detectChanges();
    const elements = fixture.nativeElement.querySelectorAll('.grid-item');
    expect(elements.length).toBe(component.categoria.length);
  });

});
