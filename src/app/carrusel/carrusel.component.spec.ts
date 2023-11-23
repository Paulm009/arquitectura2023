import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarruselComponent } from './carrusel.component';

describe('CarruselComponent', () => {
  let component: CarruselComponent;
  let fixture: ComponentFixture<CarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarruselComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente carrusel', () => {
    expect(component).toBeTruthy();
  });

  it('deberia tener una serie de imágenes deslizantes', () => {
    expect(component.sliderImagenes).toBeDefined();
    expect(component.sliderImagenes.length).toBeGreaterThan(0);
  });
  

  it('deberia mostrar imágenes como swiper-slide', () => {
    const compiled = fixture.nativeElement;
    const images = compiled.querySelectorAll('img');

    expect(images.length).toBe(component.sliderImagenes.length);

    images.forEach((img: HTMLImageElement, index: number) => {
      expect(img.src).toContain(component.sliderImagenes[index]);
    });
  });

  it('deberia cambiar el número de elementos deslizantes cuando cambia la lista sliderImagenes', () => {
    const initialLength = component.sliderImagenes.length;
    component.sliderImagenes.push('/assets/sliderimagens/extraImage.jpg');
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const swiperSlides = compiled.querySelectorAll('swiper-slide');

    expect(swiperSlides.length).toBe(initialLength + 1);
  });

  it('debería mostrar imágenes agregadas cuando cambie la lista sliderImagenes', () => {
    const newImageUrl = '/assets/sliderimagens/extraImage.jpg';
    component.sliderImagenes.push(newImageUrl);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const images = compiled.querySelectorAll('img');
    const lastImage = images[images.length - 1] as HTMLImageElement;

    expect(lastImage.src).toContain(newImageUrl);
  });
});
