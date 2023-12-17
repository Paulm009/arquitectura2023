import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContenedorComponent } from './login-contenedor/login-contenedor.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { CabeceraComponent } from './cabecera/cabecera.component';
import {MatIconModule} from "@angular/material/icon";
import { EstructuraComponent } from './estructura/estructura.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule} from "@angular/router";
import { ContenedorComponent } from './contenedor/contenedor.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import { HeaderComponent } from './header/header.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { MapaComponent } from './mapa/mapa.component';
import {MatTooltipModule} from "@angular/material/tooltip";



@NgModule({
    declarations: [
        LoginContenedorComponent,
        CabeceraComponent,
        EstructuraComponent,
        ContenedorComponent,
        HeaderComponent,
        CuerpoComponent,
        MapaComponent
    ],
    exports: [
        LoginContenedorComponent,
        ContenedorComponent,
        EstructuraComponent,
        CabeceraComponent,
        CuerpoComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        RouterModule,
        MatButtonModule,
        MatMenuModule,
        MatTooltipModule
    ]
})
export class ComponentesModule { }
