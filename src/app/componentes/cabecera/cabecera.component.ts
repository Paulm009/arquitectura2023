import {Component, Input, OnInit} from '@angular/core';
import {Params} from "@angular/router";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  @Input() queryParams: Params|null = null;
  @Input() titulo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
