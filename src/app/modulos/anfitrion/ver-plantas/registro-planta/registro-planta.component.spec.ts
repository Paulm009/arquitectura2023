import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RegistroPlantaComponent } from './registro-planta.component';
import { PlantService } from 'src/app/service/plant.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

describe('RegistroPlantaComponent', () => {
  let component: RegistroPlantaComponent;
  let fixture: ComponentFixture<RegistroPlantaComponent>;
  let plantService: jasmine.SpyObj<PlantService>;
  let snackBar: jasmine.SpyObj<MatSnackBar>;
  let location: jasmine.SpyObj<Location>;
  let activatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    const plantServiceSpy = jasmine.createSpyObj('PlantService', ['store']);
    const snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    const locationSpy = jasmine.createSpyObj('Location', ['back']);
    const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['queryParams']);

    await TestBed.configureTestingModule({
      declarations: [RegistroPlantaComponent],
      providers: [
        FormBuilder,
        { provide: PlantService, useValue: plantServiceSpy },
        { provide: MatSnackBar, useValue: snackBarSpy },
        { provide: Location, useValue: locationSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPlantaComponent);
    component = fixture.componentInstance;

    plantService = TestBed.inject(PlantService) as jasmine.SpyObj<PlantService>;
    snackBar = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    location = TestBed.inject(Location) as jasmine.SpyObj<Location>;
    activatedRoute = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería obtener correctamente el id de la categoría desde los queryParams', () => {
    const categoriaId = 'categoriaIdMock';
    activatedRoute.queryParams = of({ categoriaId });

    component.ngOnInit();

    expect(component.categoria_id).toBe(categoriaId);
  });

});
