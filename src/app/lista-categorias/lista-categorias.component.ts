
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService, Categoria } from '../servicios/categoria.service'

interface Image {
  url : string;
  title : string;
}

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit{
  images: Image[] = [
    { url: '../../assets/sliderimagens/ima1.jpg', title: 'Interior'},
    { url: '../../assets/sliderimagens/ima2.jpg', title: 'Exterior'},
    { url: '../../assets/sliderimagens/ima3.jpg', title: 'Aromaticas'},
    { url: '../../assets/sliderimagens/ima4.jpg', title: 'Ornamentales'},
    { url: '../../assets/sliderimagens/ima1.jpg', title: 'Frutales'},
    { url: '../../assets/sliderimagens/ima2.jpg', title: 'Medicinales'},
    { url: '../../assets/sliderimagens/ima3.jpg', title: 'Titulo 3'},
    { url: '../../assets/sliderimagens/ima4.jpg', title: 'Titulo 4'},
  ];


  categorias: ListaCategoriasComponent[] = [];

  constructor(private categoriaService: ListaCategoriasComponent, private router: Router) {}

  ngOnInit() {
    this.categorias = this.categoriaService.getCategorias();
  }
  getCategorias(): ListaCategoriasComponent[] {
    throw new Error('Method not implemented.');
  }

  verDetalles(id: number) {
    this.router.navigate(['/categoria', id]);
  } 
}
