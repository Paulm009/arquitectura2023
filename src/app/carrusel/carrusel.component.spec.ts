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
    const images = compiled.querySelectorAll('.swiper-slide img'); // Seleccionar las imágenes dentro de swiper-slide

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
    const images = compiled.querySelectorAll('.swiper-slide img');
    const lastImage = images[images.length - 1] as HTMLImageElement;

    expect(lastImage.src).toContain(newImageUrl);
  });

  it('debería tener un título y texto para cada imagen', () => {
    const compiled = fixture.nativeElement;
    const cardTitles = compiled.querySelectorAll('.card-title');
    const cardTexts = compiled.querySelectorAll('.card-text');

    expect(cardTitles.length).toBe(component.sliderImagenes.length);
    expect(cardTexts.length).toBe(component.sliderImagenes.length);

    for (let i = 0; i < component.sliderImagenes.length; i++) {
      expect(cardTitles[i].textContent).toContain('TIRAMISU CAKE');
      expect(cardTexts[i].textContent).toContain('Lorem ipsum');
    }
  });
});
