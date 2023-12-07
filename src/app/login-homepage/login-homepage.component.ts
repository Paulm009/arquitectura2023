import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {  ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-login-homepage',
  templateUrl: './login-homepage.component.html',
  styleUrls: ['./login-homepage.component.css']
})
export class LoginHomepageComponent implements OnInit {

  openUrl(url: string | undefined) {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.log('URL no definida');
      // O maneja la situación como consideres adecuado
    }
  }
  
  
  @ViewChild('cardsContainer') cardsContainer: ElementRef;
  cards = [
    {  url: 'https://example1.com', content: 'holasi', image: '/assets/sliderimagens/ima1.jpg' },
    {   content: 'Content 1', image: '/assets/sliderimagens/ima1.jpg' },
    {   content: 'Content 1', image: '/assets/sliderimagens/ima2.jpg' },
    {  content: 'Content 1', image: '/assets/sliderimagens/ima3.jpg' },
    {   content: 'Content 1', image: '/assets/sliderimagens/ima4.jpg' },
    { title: 'Card 1', subtitle: 'Subtitle 1', content: 'Content 1', image: '/assets/sliderimagens/ima5.jpg' },
   
    // ... Añade más tarjetas según sea necesario
  ];


  scrollLeft() {
    this.cardsContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.cardsContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }


  formulario: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder,) {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  login() {

  }

}
