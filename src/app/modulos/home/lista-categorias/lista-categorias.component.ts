import { Component, OnInit } from '@angular/core';
import { INPUT_APARIENCIA } from 'src/app/config/constantes';
import { Plantas } from '../../../../../src/app/modelos/plantas';
import {AnfitrionService} from "../../../service/anfitrion.service";
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/modelos/category';
import { Subject, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.scss']
})
export class ListaCategoriasComponent implements OnInit {
  apariencia = INPUT_APARIENCIA;
  constructor(private anfitrionService: AnfitrionService,private categoryService: CategoryService ) { }
  categoria: Category[] = [];
  categoyInstance = new Subject();
  base_backend_url: string = environment.backendStorageUrl;

  ngOnInit(): void { 
    this.getCategorias();
  }
  getCategorias() {
    this.categoryService.getAll().pipe(takeUntil(this.categoyInstance)).subscribe((data:any) => {
      this.categoria = data;
    });
  }

}
