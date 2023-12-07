import { Component } from '@angular/core';

interface Image {
  url : string;
  title : string;
}

@Component({
  selector: 'app-lista-plantas',
  templateUrl: './lista-plantas.component.html',
  styleUrls: ['./lista-plantas.component.css']
})
export class ListaPlantasComponent {
  images: Image[] = [
    { url: '../../assets/sliderimagens/ima4.jpg', title: 'Rosa'},
    { url: '../../assets/sliderimagens/ima3.jpg', title: 'Lirio'},
    { url: '../../assets/sliderimagens/ima2.jpg', title: 'Orquidea'},
    { url: '../../assets/sliderimagens/ima1.jpg', title: 'Geranio'},
    { url: '../../assets/sliderimagens/ima3.jpg', title: 'Girasol'},
    { url: '../../assets/sliderimagens/ima1.jpg', title: 'Hortensia'},
    { url: '../../assets/sliderimagens/ima4.jpg', title: 'Titulo 3'},
    { url: '../../assets/sliderimagens/ima2.jpg', title: 'Titulo 4'},
  ];
}
