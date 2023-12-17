import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalEliminarComponent } from '../anfitrion-propiedades/modal-eliminar/modal-eliminar.component';
import { ModalPublicadoComponent } from '../anfitrion-propiedades/modal-publicado/modal-publicado.component';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/modelos/category';
import { Subject, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-anfitrion-propiedades',
  templateUrl: './anfitrion-propiedades.component.html',
  styleUrls: ['./anfitrion-propiedades.component.scss']
})
export class AnfitrionPropiedadesComponent implements OnInit {

  categoria: Category[] = [];
  categoyInstance = new Subject();
  base_backend_url: string = environment.backendStorageUrl;

  constructor(public dialog: MatDialog,
              private categoryService: CategoryService ) {  }

  ngOnInit(): void {
    this.getCategorias();
  }

  ngOnDestroy() {
    this.categoyInstance.unsubscribe();
  }

  getCategorias() {
    this.categoryService.getAll().pipe(takeUntil(this.categoyInstance)).subscribe((data:any) => {
      this.categoria = data;
    });
  }
  
}
