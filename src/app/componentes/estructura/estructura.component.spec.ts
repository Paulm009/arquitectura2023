import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstructuraComponent } from './estructura.component';

describe('EstructuraComponent', () => {
  let component: EstructuraComponent;
  let fixture: ComponentFixture<EstructuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstructuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería tener un componente app-header', () => {
    const element: HTMLElement = fixture.nativeElement;
    const appHeaderComponent = element.querySelector('app-header');
    expect(appHeaderComponent).toBeTruthy();
  });

  it('debería tener un mat-drawer-container con clase "cuerpo"', () => {
    const element: HTMLElement = fixture.nativeElement;
    const matDrawerContainer = element.querySelector('mat-drawer-container.cuerpo');
    expect(matDrawerContainer).toBeTruthy();
  });

  it('debería tener un elemento div que contenga router-outlet', () => {
    const element: HTMLElement = fixture.nativeElement;
    const routerOutletDiv = element.querySelector('mat-drawer-container > div');
    expect(routerOutletDiv).toBeTruthy();
    const routerOutlet = routerOutletDiv?.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });

  it('debería tener exactamente dos hijos directos', () => {
    const element: HTMLElement = fixture.nativeElement;
    const directChildren = element.children;
    expect(directChildren.length).toBe(2);
  });

  it('debería tener un mat-drawer-container como elemento raíz', () => {
    const element: HTMLElement = fixture.nativeElement;
    const matDrawerContainer = element.querySelector('mat-drawer-container');
    expect(matDrawerContainer).toBeTruthy();
  });
});
