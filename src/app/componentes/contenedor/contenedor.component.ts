import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.scss']
})
export class ContenedorComponent implements OnInit {
  @Input() visible = true;

  constructor() { }

  ngOnInit(): void {
  }

}
