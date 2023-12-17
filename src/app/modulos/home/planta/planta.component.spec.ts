import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantaComponent } from './planta.component';
import { PlantService } from 'src/app/service/plant.service';
import { of } from 'rxjs';

describe('PlantaComponent', () => {
  let component: PlantaComponent;
  let fixture: ComponentFixture<PlantaComponent>;
  let plantServiceStub: Partial<PlantService>;

  beforeEach(async () => {
    plantServiceStub = {
      get: () => {
        // Simulación de datos de plantas
        return of([
          { id: 1, name: 'Planta 1', description: 'Descripción de la Planta 1', img: 'path/to/plant1.jpg' },
          { id: 2, name: 'Planta 2', description: 'Descripción de la Planta 2', img: 'path/to/plant2.jpg' }
          // Agrega más datos de plantas si es necesario
        ]);
      }
    };

    await TestBed.configureTestingModule({
      declarations: [PlantaComponent],
      providers: [
        { provide: PlantService, useValue: plantServiceStub }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar las plantas al inicializar', () => {
    expect(component.plantas.length).toBeGreaterThan(0);
  });

  it('debería mostrar la información de las plantas correctamente', () => {
    const compiled = fixture.nativeElement;
    const plantElements = compiled.querySelectorAll('.example-card');
    expect(plantElements.length).toEqual(component.plantas.length);

    for (let i = 0; i < component.plantas.length; i++) {
      const planta = component.plantas[i];
      const plantElement = plantElements[i];
      expect(plantElement.querySelector('mat-card-title').textContent).toContain(planta.name);
      expect(plantElement.querySelector('p').textContent).toContain(planta.description);
    }
  });


});
