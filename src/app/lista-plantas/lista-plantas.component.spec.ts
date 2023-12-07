import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaPlantasComponent } from './lista-plantas.component';

describe('ListaPlantasComponent', () => {
  let component: ListaPlantasComponent;
  let fixture: ComponentFixture<ListaPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaPlantasComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar las imágenes correctamente', () => {
    const compiled = fixture.nativeElement;
    const imageItems = compiled.querySelectorAll('.image-item');

    expect(imageItems.length).toBe(component.images.length);

    for (let i = 0; i < component.images.length; i++) {
      const image = component.images[i];
      const imgElement = imageItems[i].querySelector('img');
      const pElement = imageItems[i].querySelector('p');

      expect(imgElement).toBeTruthy();
      expect(imgElement.getAttribute('src')).toBe(image.url);
      expect(imgElement.getAttribute('alt')).toBe(image.title);
      expect(imgElement.getAttribute('title')).toBe(image.title);

      expect(pElement).toBeTruthy();
      expect(pElement.textContent).toContain(image.title);
    }
  });

  it('debería tener al menos una imagen para mostrar', () => {
    expect(component.images.length).toBeGreaterThan(0);
  });

  it('debería mostrar una imagen específica al ser accedida', () => {
    const specificImageIndex = 3; // Cambiar según el índice de la imagen específica que se espera mostrar
    const compiled = fixture.nativeElement;
    const specificImage = compiled.querySelectorAll('.image-item')[specificImageIndex];

    expect(specificImage).toBeTruthy();

    const imgElement = specificImage.querySelector('img');
    const pElement = specificImage.querySelector('p');
    const specificImageInfo = component.images[specificImageIndex];

    expect(imgElement.getAttribute('src')).toBe(specificImageInfo.url);
    expect(imgElement.getAttribute('alt')).toBe(specificImageInfo.title);
    expect(imgElement.getAttribute('title')).toBe(specificImageInfo.title);
    expect(pElement.textContent).toContain(specificImageInfo.title);
  });

  it('debería cambiar la cantidad de imágenes después de agregar una nueva', () => {
    const initialImageCount = component.images.length;
    const newImage: Image = { url: '../../assets/sliderimagens/ima5.jpg', title: 'Nueva Imagen' };
    component.images.push(newImage);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const updatedImageCount = compiled.querySelectorAll('.image-item').length;

    expect(updatedImageCount).toBe(initialImageCount + 1);
  });

  it('debería eliminar una imagen al borrarla de la lista', () => {
    const initialImageCount = component.images.length;
    component.images.pop(); // Eliminar la última imagen
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const updatedImageCount = compiled.querySelectorAll('.image-item').length;

    expect(updatedImageCount).toBe(initialImageCount - 1);
  });

  it('debería tener un título específico para cada imagen', () => {
    for (const image of component.images) {
      expect(image.title).toBeTruthy();
    }
  });

  interface Image {
    url: string;
    title: string;
  }
});
