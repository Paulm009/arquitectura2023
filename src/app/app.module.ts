import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InformacionComponent } from './informacion/informacion.component';
import { DonacionComponent } from './donacion/donacion.component';
import { ListaPlantasComponent } from './lista-plantas/lista-plantas.component';
import { BibliotecaVideosComponent } from './biblioteca-videos/biblioteca-videos.component';
import { LoginComponent } from './login/login.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { LoginHomepageComponent } from './login-homepage/login-homepage.component';
registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    FooterComponent,
    HeaderComponent,
    InformacionComponent,
    DonacionComponent,
    ListaPlantasComponent,
    BibliotecaVideosComponent,
    LoginComponent,
    ListaCategoriasComponent,
    LoginHomepageComponent,
    
    
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCarouselModule,
    NzCardModule,
    ReactiveFormsModule
   
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
