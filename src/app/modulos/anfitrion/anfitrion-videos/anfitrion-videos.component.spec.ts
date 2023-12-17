import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AnfitrionVideosComponent } from './anfitrion-videos.component';
import { VideoService } from 'src/app/service/video.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject, of } from 'rxjs';

describe('AnfitrionVideosComponent', () => {
  let component: AnfitrionVideosComponent;
  let fixture: ComponentFixture<AnfitrionVideosComponent>;
  let videoService: jasmine.SpyObj<VideoService>;
  let sanitizer: DomSanitizer;

  beforeEach(async () => {
    const videoServiceSpy = jasmine.createSpyObj('VideoService', ['getAllVideos']);
    const sanitizerMock = {
      bypassSecurityTrustResourceUrl: jasmine.createSpy('bypassSecurityTrustResourceUrl').and.returnValue('safe_url'),
    };

    TestBed.configureTestingModule({
      declarations: [AnfitrionVideosComponent],
      providers: [
        { provide: VideoService, useValue: videoServiceSpy },
        { provide: DomSanitizer, useValue: sanitizerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AnfitrionVideosComponent);
    component = fixture.componentInstance;
    videoService = TestBed.inject(VideoService) as jasmine.SpyObj<VideoService>;
    sanitizer = TestBed.inject(DomSanitizer);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar la lista de videos correctamente', () => {
    const videosMock = [{ iframe_code: 'video1' }, { iframe_code: 'video2' }];
    videoService.getAllVideos.and.returnValue(of(videosMock));

    component.ngOnInit();

    expect(videoService.getAllVideos).toHaveBeenCalled();
    expect(component.videos.length).toBe(2);
    expect(component.videos[0].iframe_code).toBe('safe_url');
    expect(component.videos[1].iframe_code).toBe('safe_url');
    expect(sanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledTimes(2);
    expect(sanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith('video1');
    expect(sanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith('video2');
  });

  it('debería manejar correctamente la ausencia de videos', () => {
    videoService.getAllVideos.and.returnValue(of([]));

    component.ngOnInit();

    expect(component.videos.length).toBe(0);
  });
});
