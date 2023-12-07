import { Component } from '@angular/core';

interface Image {
  url : string;
  title : string;
}

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent {
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
}
