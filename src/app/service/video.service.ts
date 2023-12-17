import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private BASE_URL = `${environment.backendUrl}/videos`;
  constructor(private http: HttpClient) { }

  getAllVideos() {
    return this.http.get(this.BASE_URL);
  }
 
  store(data: FormData) {
    return this.http.post(this.BASE_URL, data);
  }
}
