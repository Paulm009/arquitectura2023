import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnfitrionPropiedadesComponent} from "./anfitrion-propiedades/anfitrion-propiedades.component";
import {AnfitrionRegistroComponent} from "./anfitrion-registro/anfitrion-registro.component";
import { VerPlantaComponent } from './ver-plantas/ver-planta.component';
import { RegistroPlantaComponent } from './ver-plantas/registro-planta/registro-planta.component';
import { AnfitrionVideosComponent } from './anfitrion-videos/anfitrion-videos.component';
import { RegistrarVideoComponent } from './anfitrion-videos/registrar-video/registrar-video.component';

const routes: Routes = [
  {
    path: '',
    component: AnfitrionPropiedadesComponent,
  },
  { 
    path: 'registro-propiedad',
    component: AnfitrionRegistroComponent,
  },
  {
    path: 'ver-plantas',
    component: VerPlantaComponent,
  },
  {
    path: 'registro-planta',
    component: RegistroPlantaComponent,
  },
  {
    path: 'videos',
    component: AnfitrionVideosComponent,
  },
  {
    path: 'registro-video',
    component: RegistrarVideoComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnfitrionRoutingModule { }
