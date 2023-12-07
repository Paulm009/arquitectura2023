import { Injectable } from '@angular/core';

export interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
  // Agrega más propiedades según sea necesario
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private categorias: Categoria[] = [
    { id: 1, nombre: 'Categoría 1', descripcion: 'Descripción de Categoría 1' },
    // ... otras categorías ...
  ];

  constructor() {}

  getCategorias(): Categoria[] {
    return this.categorias;
  }

  getCategoriaPorId(id: number): Categoria | undefined {
    return this.categorias.find(categoria => categoria.id === id);
  }
}