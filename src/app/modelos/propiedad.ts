export interface Propiedad {
  id: number;
  namePropiedad: string;
  anfitrion: string;
  department: string;
  type: string;
  price: number;
  imageUrl: string;
  dateIni: Date //fecha inicio
  dateFin: Date; //fecha fin
  estado: string; // Cambia el tipo de estado a la interfaz Estado
}

