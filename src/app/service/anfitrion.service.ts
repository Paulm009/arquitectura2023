import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Plantas} from "../modelos/plantas";

@Injectable({
  providedIn: 'root'
})
export class AnfitrionService {
  private plantas: Plantas[] = [
   
  ];


  constructor() { }

  getCategorias(): Observable<Plantas[]> {
    return of(this.plantas);
  }
}
