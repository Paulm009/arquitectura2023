import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnfitrionRoutingModule } from './anfitrion-routing.module';
import { AnfitrionPropiedadesComponent } from './anfitrion-propiedades/anfitrion-propiedades.component';
import { AnfitrionRegistroComponent } from './anfitrion-registro/anfitrion-registro.component';
import {ComponentesModule} from "../../componentes/componentes.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatSliderModule} from "@angular/material/slider";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule } from '@angular/material/grid-list';
import {ModalEliminarComponent } from './anfitrion-propiedades/modal-eliminar/modal-eliminar.component'  ;
import {MatDialogModule} from '@angular/material/dialog';
import {ModalPublicadoComponent } from './anfitrion-propiedades/modal-publicado/modal-publicado.component';
//import {ModalPausaComponent } from './anfitrion-propiedades/modal-pausa/modal-pausa.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { ModalRegistrarComponent } from './anfitrion-registro/modal-registrar/modal-registrar.component';
import { VerPlantaComponent } from './ver-plantas/ver-planta.component';
import { RegistroPlantaComponent } from './ver-plantas/registro-planta/registro-planta.component';
import { AnfitrionVideosComponent } from './anfitrion-videos/anfitrion-videos.component';
import { RegistrarVideoComponent } from './anfitrion-videos/registrar-video/registrar-video.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    AnfitrionPropiedadesComponent,
    AnfitrionRegistroComponent,
    ModalEliminarComponent,
    ModalPublicadoComponent,
    ModalRegistrarComponent,
    VerPlantaComponent,
    RegistroPlantaComponent,
    AnfitrionVideosComponent,
    RegistrarVideoComponent
  ],
    imports: [
        CommonModule,
        AnfitrionRoutingModule,
        ComponentesModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatInputModule,
        MatSliderModule,
        MatCheckboxModule,
        MatCardModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatRadioModule, 
        MatGridListModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMenuModule,
        FormsModule,
        MatSnackBarModule
    ]
})

export class AnfitrionModule {


}
