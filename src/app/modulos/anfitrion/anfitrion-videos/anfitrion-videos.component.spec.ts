import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfitrionVideosComponent } from './anfitrion-videos.component';

describe('AnfitrionVideosComponent', () => {
  let component: AnfitrionVideosComponent;
  let fixture: ComponentFixture<AnfitrionVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfitrionVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnfitrionVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
