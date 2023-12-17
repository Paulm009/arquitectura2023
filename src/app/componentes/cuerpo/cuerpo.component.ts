import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})
export class CuerpoComponent implements OnInit {
  @Input() visible = true;

  constructor() { }

  ngOnInit(): void {
  }

}
