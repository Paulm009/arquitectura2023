import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCategoriasComponent } from './lista-categorias.component';

describe('ListaCategoriasComponent', () => {
  let component: ListaCategoriasComponent;
  let fixture: ComponentFixture<ListaCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaCategoriasComponent],
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

  it('debería no mostrar mensaje si hay imágenes', () => {
    const compiled = fixture.nativeElement;
    const noImagesMessage = compiled.querySelector('.no-images-message');

    expect(noImagesMessage).toBeNull();
  });

  it('debería no mostrar un mensaje si no hay imágenes', () => {
    component.images = []; // Vaciar la lista de imágenes
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const noImagesMessage = compiled.querySelector('.no-images-message');

    expect(noImagesMessage).toBeNull()
  });

  it('debería tener títulos únicos para cada imagen', () => {
    const uniqueTitles = new Set(component.images.map(image => image.title));
    expect(uniqueTitles.size).toBe(component.images.length);
  });

  it('debería tener URL válidas para todas las imágenes', () => {
    for (const image of component.images) {
      expect(image.url).toMatch(/^..\/\.\.\/assets\/sliderimagens\/ima\d\.jpg$/);
    }
  });

  it('debería tener alt y title coincidentes para todas las imágenes', () => {
    const compiled = fixture.nativeElement;
    const imageItems = compiled.querySelectorAll('.image-item');

    for (let i = 0; i < component.images.length; i++) {
      const image = component.images[i];
      const imgElement = imageItems[i].querySelector('img');

      expect(imgElement.getAttribute('alt')).toBe(image.title);
      expect(imgElement.getAttribute('title')).toBe(image.title);
    }
  });

  it('debería contener una imagen específica', () => {
    const specificImage = component.images.find(image => image.title === 'Medicinales');
    expect(specificImage).toBeTruthy();
  });

  it('debería actualizar la lista de imágenes al añadir una nueva', () => {
    const initialImageCount = component.images.length;
    component.images.push({ url: 'nueva_imagen.jpg', title: 'Nueva Imagen' });
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const updatedImageCount = compiled.querySelectorAll('.image-item').length;

    expect(updatedImageCount).toBe(initialImageCount + 1);
  });

  it('debería eliminar una imagen específica de la lista', () => {
    const initialImageCount = component.images.length;
    component.images = component.images.filter(image => image.title !== 'Aromaticas');
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const updatedImageCount = compiled.querySelectorAll('.image-item').length;

    expect(updatedImageCount).toBe(initialImageCount - 1);
  });

});
