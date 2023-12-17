import { Component, OnInit } from '@angular/core';
import { Plantas } from '../../../../../src/app/modelos/plantas';
import {AnfitrionService} from "../../../service/anfitrion.service";
import { environment } from 'src/environments/environment';
import { PlantService } from 'src/app/service/plant.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.scss']
})
export class PlantaComponent implements OnInit {
  constructor(private anfitrionService: AnfitrionService,private plantasService: PlantService) { }
  plantas: Plantas[] = [];
  categoyInstance = new Subject();
  base_backend_url: string = environment.backendStorageUrl;

  ngOnInit(): void { 
    this.cargarPlantas();
  }
  cargarPlantas() {
    this.plantasService.get().pipe(takeUntil(this.categoyInstance)).subscribe((data:any) => {
      console.log(data);
      this.plantas = data;
    });
  }

}
