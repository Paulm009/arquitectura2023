import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RegistrarVideoComponent } from './registrar-video.component';
import { VideoService } from 'src/app/service/video.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';

describe('RegistrarVideoComponent', () => {
  let component: RegistrarVideoComponent;
  let fixture: ComponentFixture<RegistrarVideoComponent>;
  let videoService: jasmine.SpyObj<VideoService>;
  let snackBar: jasmine.SpyObj<MatSnackBar>;
  let location: jasmine.SpyObj<Location>;

  beforeEach(async () => {
    const videoServiceSpy = jasmine.createSpyObj('VideoService', ['store']);
    const snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    const locationSpy = jasmine.createSpyObj('Location', ['back']);

    TestBed.configureTestingModule({
      declarations: [RegistrarVideoComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: VideoService, useValue: videoServiceSpy },
        { provide: MatSnackBar, useValue: snackBarSpy },
        { provide: Location, useValue: locationSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarVideoComponent);
    component = fixture.componentInstance;
    videoService = TestBed.inject(VideoService) as jasmine.SpyObj<VideoService>;
    snackBar = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    location = TestBed.inject(Location) as jasmine.SpyObj<Location>;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });


  it('debería mostrar un mensaje de éxito al registrar el video', () => {
    videoService.store.and.returnValue(of(true));
    component.formRegistro.setValue({ iframeCode: 'código de ejemplo' });
    component.guardarDatos();
    expect(snackBar.open).toHaveBeenCalledWith('Video registrado correctamente', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['success'],
    });
    expect(location.back).toHaveBeenCalled();
  });

  it('debería mostrar un mensaje de error al fallar el registro del video', () => {
    videoService.store.and.returnValue(throwError('Error'));
    component.formRegistro.setValue({ iframeCode: 'código de ejemplo' });
    component.guardarDatos();
    expect(snackBar.open).toHaveBeenCalledWith('Error al registrar el video', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['error'],
    });
  });
});
