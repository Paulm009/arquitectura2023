import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnfitrionModule} from "./modulos/anfitrion/anfitrion.module";
import {AuthActiveGuard} from "./guard/auth-active.guard";
import {AdminGuard} from "./guard/admin.guard";
import {EstructuraComponent} from "./componentes/estructura/estructura.component";
const routes: Routes = [
  
  { 
    path: '', 
    redirectTo: 'home-page', 
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    loadChildren: () => import('./modulos/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'anfitrion',
    canActivate: [AuthActiveGuard,AdminGuard],
    component: EstructuraComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modulos/anfitrion/anfitrion.module').then(m => m.AnfitrionModule),
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
