import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/service/plant.service';
import { Plantas } from 'src/app/modelos/plantas';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({ 
  selector: 'app-ver-planta',
  templateUrl: './ver-planta.component.html',
  styleUrls: ['./ver-planta.component.scss']
})
export class VerPlantaComponent implements OnInit {

  categoyInstance = new Subject();
  plantas: Plantas[] = [];
  categoria_id: any;
  base_backend_url: string = environment.backendStorageUrl;
  constructor(private plantasService: PlantService,
              private activatedRoute: ActivatedRoute) {

               }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((p: any) => {
      console.log(p);
      this.categoria_id = p.categoriaId;
    });
    this.cargarPlantas();
  }

  cargarPlantas() {
    this.plantasService.getAll(this.categoria_id).pipe(takeUntil(this.categoyInstance)).subscribe((data:any) => {
      console.log(data);
      this.plantas = data;
    });
  }
}
