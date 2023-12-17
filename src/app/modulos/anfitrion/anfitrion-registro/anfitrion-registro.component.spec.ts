import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfitrionRegistroComponent } from './anfitrion-registro.component';

describe('AnfitrionRegistroComponent', () => {
  let component: AnfitrionRegistroComponent;
  let fixture: ComponentFixture<AnfitrionRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfitrionRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnfitrionRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
