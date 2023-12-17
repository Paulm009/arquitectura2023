import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarVideoComponent } from './registrar-video.component';

describe('RegistrarVideoComponent', () => {
  let component: RegistrarVideoComponent;
  let fixture: ComponentFixture<RegistrarVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
