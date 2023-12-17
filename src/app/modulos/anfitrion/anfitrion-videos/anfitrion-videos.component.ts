import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';
import { Videos } from 'src/app/modelos/videos';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-anfitrion-videos',
  templateUrl: './anfitrion-videos.component.html',
  styleUrls: ['./anfitrion-videos.component.scss']
})
export class AnfitrionVideosComponent implements OnInit {
  videos: Videos[] = [];
  categoryInstance = new Subject();
  constructor(private sanitizer: DomSanitizer,
    private videosService: VideoService) { }

  ngOnInit(): void {
    this.cargarVideos();
  }

  cargarVideos() {
    this.videosService.getAllVideos().pipe(takeUntil(this.categoryInstance)).subscribe((data:any) => {
      console.log(data);
      this.videos = data;
      this.videos.forEach(video => {
        video.iframe_code = this.sanitizer.bypassSecurityTrustResourceUrl(video.iframe_code) as string;
      });
      
    });

  
  }
}
