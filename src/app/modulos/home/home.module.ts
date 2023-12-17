import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginRoutingModule } from './home-routing.module';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ComponentesModule} from "../../componentes/componentes.module";
import {MatNativeDateModule} from "@angular/material/core";
import { HomePageComponent } from './home-page/login-home-page.component';
import { LoginComponent } from './login/login.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { DonacionComponent } from './donacion/donacion.component';
import { PlantaComponent } from './planta/planta.component';
import { VideosComponent } from './videos/videos.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    ListaCategoriasComponent,
    DonacionComponent,
    PlantaComponent,
    VideosComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatNativeDateModule,
        ComponentesModule,
        MatToolbarModule,
        MatGridListModule
    ]
})
export class HomeModule { }
