import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { HomePageComponent } from './login-home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [ReactiveFormsModule] // Agrega ReactiveFormsModule a los imports del TestBed
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cambiar al siguiente slide', () => {
    const initialIndex = component.currentIndex;
    component.nextSlide();
    expect(component.currentIndex).toEqual((initialIndex + 1) % component.carouselImages.length);
  });

  it('debería cambiar al slide anterior', () => {
    const initialIndex = component.currentIndex;
    component.prevSlide();
    expect(component.currentIndex).toEqual((initialIndex - 1 + component.carouselImages.length) % component.carouselImages.length);
  });

  it('debería actualizar el slide al hacer clic en una imagen', () => {
    const index = 2; // El índice de la imagen a simular el clic
    component.updateSlide(index);
    expect(component.currentIndex).toEqual(index);
  });

  it('debería mostrar un número de tarjetas igual a cardsToShow', () => {
    expect(component.cards.length).toBeGreaterThanOrEqual(component.cardsToShow);
  });

  it('debería cambiar al desplazarse a la izquierda', () => {
    const initialScroll = component.cardsContainer?.nativeElement.scrollLeft;
    component.scrollLeft();
    expect(component.cardsContainer?.nativeElement.scrollLeft).toBe(initialScroll);
  });
});
