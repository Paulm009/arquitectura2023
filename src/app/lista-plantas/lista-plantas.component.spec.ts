import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaPlantasComponent } from './lista-plantas.component';

describe('ListaPlantasComponent', () => {
  let component: ListaPlantasComponent;
  let fixture: ComponentFixture<ListaPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPlantasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar la lista de plantas vacía', () => {
    expect(component).toEqual(0);
  });

  it('debería agregar una planta a la lista', () => {
    expect(component).toEqual(1);
  });

  it('debería eliminar una planta de la lista', () => {
    expect(component).toEqual(2);
  });

  it('debería renderizar las plantas en la plantilla', () => {
    expect(component).toEqual(4);
  });

  it('debería actualizar la lista cuando se añade una nueva planta', () => {
    expect(0).toEqual(1);
  });
  
  it('debería actualizar la lista cuando se elimina una planta', () => {
    expect(0).toEqual(1);
  });
});
