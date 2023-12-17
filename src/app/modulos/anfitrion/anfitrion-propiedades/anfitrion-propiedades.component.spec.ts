import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfitrionPropiedadesComponent } from './anfitrion-propiedades.component';

describe('AnfitrionPropiedadesComponent', () => {
  let component: AnfitrionPropiedadesComponent;
  let fixture: ComponentFixture<AnfitrionPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfitrionPropiedadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnfitrionPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
