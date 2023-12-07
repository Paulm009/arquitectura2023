import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarruselComponent } from './carrusel/carrusel.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { ListaPlantasComponent } from './lista-plantas/lista-plantas.component';
import { DonacionComponent } from './donacion/donacion.component';
import { LoginHomepageComponent } from './login-homepage/login-homepage.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaDetallesComponent } from './categoria-detalles/categoria-detalles.component';


const routes: Routes = [
  { path: "", component: LoginHomepageComponent },
  { path: 'categoria/:id', component: CategoriaDetallesComponent },
  { path: "carrusel", component: CarruselComponent },
  { path: "login", component: LoginComponent },
  { path: "header", component: HeaderComponent },
  { path: "footer", component: FooterComponent },
  { path: "listaCategoria", component: ListaCategoriasComponent },
  { path: "listaPlanta", component: ListaPlantasComponent },
  { path: "donacion", component: DonacionComponent },
   { path: 'categorias', component: CategoriasComponent },
  { path: 'categoria/:id', component: CategoriaDetallesComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
