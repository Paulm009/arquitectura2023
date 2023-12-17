import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private BASE_URL = `${environment.backendUrl}/categories`;
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.BASE_URL);
  }

  store(data: FormData) {
    return this.http.post<any>(this.BASE_URL, data);
  }
}
