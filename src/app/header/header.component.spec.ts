import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia contener un logo', () => {
    expect(fixture.nativeElement.querySelector('.logo')).toBeTruthy();
  });

  it('deberia tener un menú de navegación', () => {
    expect(fixture.nativeElement.querySelector('.navigation-menu')).toBeTruthy();
  });

  it('deberia mostrar el título del sitio', () => {
    expect(fixture.nativeElement.querySelector('.site-title').textContent).toContain('My Website');
  });

  it('deberia activar una acción cuando se hace clic en un enlace de navegación', () => {
    const mockClickFunction = jasmine.createSpy('mockClickFunction');
    expect(mockClickFunction).toHaveBeenCalled();
  });
});
