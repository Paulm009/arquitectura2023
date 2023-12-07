import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginHomepageComponent } from './login-homepage.component';

describe('LoginHomepageComponent', () => {
  let component: LoginHomepageComponent;
  let fixture: ComponentFixture<LoginHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginHomepageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia tener un carousel con imágenes y controles', () => {
    const compiled = fixture.nativeElement;
    const carousel = compiled.querySelector('.carousel');

    expect(carousel).toBeTruthy();

    const slides = compiled.querySelectorAll('.slides .slide');
    const navigationLabels = compiled.querySelectorAll('.navigation label');

    expect(slides.length).toBe(3); 
    expect(navigationLabels.length).toBe(3); 
  });

  it('deberia mostrar tarjetas con información', () => {
    expect(true).toBeFalsy();
  });

  it('deberia cambiar el slide del carousel al hacer clic en los controles de navegación', () => {
    expect(true).toBeFalsy();
  });

  it('deberia ejecutar scrollLeft y scrollRight al hacer clic en los botones', () => {
    expect(true).toBeFalsy();
  });
});
