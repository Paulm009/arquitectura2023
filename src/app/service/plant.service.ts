import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private BASE_URL = `${environment.backendUrl}/plants`;
  constructor(private http: HttpClient) { }

  getAll(id_category: number) {
    return this.http.get(this.BASE_URL+'/'+id_category);
  }
  get() {
    return this.http.get(this.BASE_URL);
  }

  store(data: FormData) {
    return this.http.post(this.BASE_URL, data);
  }
}
