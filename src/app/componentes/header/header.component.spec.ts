import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { AuthService } from '../../common/auth.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatToolbarModule, MatMenuModule, RouterTestingModule],
      providers: [
        {
          provide: AuthService,
          useValue: {
            getRoles: () => ['admin'] // Simula el comportamiento de getRoles en tu AuthService
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería renderizar el mat-toolbar', () => {
    const toolbar = fixture.debugElement.query(By.css('mat-toolbar'));
    expect(toolbar).toBeTruthy();
  });

  it('debería contener un texto "Jardin Botanico" con un enlace routerLink', () => {
    const link = fixture.debugElement.query(By.css('mat-toolbar span.text-Botanico'));
    expect(link.nativeElement.innerText.trim()).toBe('Jardin Botanico');
    expect(link.attributes['routerLink']).toBe('/anfitrion');
  });

  it('debería tener dos botones mat-icon-button', () => {
    const buttons = fixture.debugElement.queryAll(By.css('mat-toolbar button[mat-icon-button]'));
    expect(buttons.length).toBe(2);
  });

  it('debería tener un menú mat-menu', () => {
    const menu = fixture.debugElement.query(By.css('mat-menu'));
    expect(menu).toBeTruthy();
  });

  it('debería tener un botón marcado como "nulo" al comienzo', () => {
    const triggerButton = fixture.debugElement.query(By.css('button[matMenuTriggerFor="menu"]'));
    expect(triggerButton).toBeNull();
  });

  it('debería mostrar el rol del usuario', () => {
    expect(component.userRole).toBe('admin');
  });
});
