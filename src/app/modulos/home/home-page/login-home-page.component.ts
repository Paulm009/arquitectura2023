import { Component, OnInit, ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild('cardsContainer') cardsContainer: ElementRef | undefined;

  carouselImages: string[] = [
    'assets/img/planta1.avif',
    'assets/img/donacionfondo.jpg',
    'assets/img/planta3.jpg',
    'assets/img/planta4.jpg',
    'assets/img/planta5.jpg',
    'assets/img/planta6.jpg',
  ];

  cards: any[] = [
    { title: 'Interiores', content: 'Son plantas que se encuentran dentro del hogar', image: 'assets/img/categoria1.jpg' },
    { title: 'Estructura', content: 'Son consideradas plantas segun la estructura que tienen', image: 'assets/img/categoria2.jpg' },
    { title: 'Habitad', content: 'Son plantas que se clasifican segun donde habitan', image: 'assets/img/categoria3.jpg' },
    { title: 'Interiores', content: 'Son plantas que se encuentran dentro del hogar', image: 'assets/img/categoria1.jpg' },
    { title: 'Estructura', content: 'Son consideradas plantas segun la estructura que tienen', image: 'assets/img/categoria2.jpg' },
    { title: 'Habitad', content: 'Son plantas que se clasifican segun donde habitan', image: 'assets/img/categoria3.jpg' },
    { title: 'Interiores', content: 'Son plantas que se encuentran dentro del hogar', image: 'assets/img/categoria1.jpg' },
    { title: 'Estructura', content: 'Son consideradas plantas segun la estructura que tienen', image: 'assets/img/categoria2.jpg' },
    { title: 'Habitad', content: 'Son plantas que se clasifican segun donde habitan', image: 'assets/img/categoria3.jpg' },
  ];

  cardsToShow = 3;
  currentIndexCard = 0;
  selectedImage: string | null = null;
  formulario: FormGroup;
  hide = true;
  currentIndex: number = 0;
  cardsPerPage = 3;
  totalPages: number;  // Agregamos esta línea
  currentPage: number; // Agregamos esta línea

  private intervalId: any;

  constructor(private formBuilder: FormBuilder, private renderer: Renderer2) {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });

    this.totalPages = Math.ceil(this.cards.length / this.cardsPerPage);
    this.currentPage = 0;
  }

  ngOnInit(): void {
    // Inicia el cambio automático cada 5 segundos (ajustable según tus necesidades)
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  ngOnDestroy(): void {
    // Limpia el intervalo cuando el componente se destruye para evitar problemas de memoria
    clearInterval(this.intervalId);
  }

  login(): void {
    // Implementa la lógica de inicio de sesión si es necesario
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
    this.updateSlide(this.currentIndex);
  }

  nextSlide(): void {
    if (this.carouselImages) {
      this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
      this.updateSlide(this.currentIndex);
    }
  }

  updateSlide(index: number): void {
    this.currentIndex = index;
    this.selectedImage = this.carouselImages[index];
    this.currentPage = Math.floor(index / this.cardsPerPage);
    this.scrollToPage();
  }

  private calculateCardWidth(): number {
    const cardElement = document.querySelector('.carousel-card') as HTMLElement;
    return cardElement ? cardElement.offsetWidth : 0;
  }

  scrollToPage(): void {
    if (this.cardsContainer && this.cardsContainer.nativeElement) {
      const container = this.cardsContainer.nativeElement;
      const targetScrollLeft = this.currentPage * this.calculateCardWidth();
      this.renderer.setStyle(container, 'scrollLeft', targetScrollLeft);
    }
  }

  scrollLeft(): void {
    if (this.cardsContainer && this.cardsContainer.nativeElement) {
      this.cardsContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  scrollRight(): void {
    if (this.cardsContainer && this.cardsContainer.nativeElement) {
      this.cardsContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  private getCardWidth(): number {
    return 300; // Ajusta según sea necesario
  }
}
