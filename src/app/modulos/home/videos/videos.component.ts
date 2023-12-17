import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/service/video.service';
import { Videos } from 'src/app/modelos/videos';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos: Videos[] = [];

  constructor(private sanitizer: DomSanitizer,
    private videoService: VideoService) { }

  ngOnInit(): void {
    this.cargarVideos();
  }

  cargarVideos() {
    this.videoService.getAllVideos().subscribe((data: any) => {
      console.log(data);
      this.videos = data;
      this.videos.forEach(video => {
        video.iframe_code = this.sanitizer.bypassSecurityTrustResourceUrl(video.iframe_code) as string;
      });

    });

  }
}
