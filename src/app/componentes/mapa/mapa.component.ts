import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { INPUT_APARIENCIA } from "../../config/constantes";


const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements AfterViewInit {
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('inputFotos') fileInputFotos: any;
  private marker: any;
  private map: any;


  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [-17.3952, -66.1391],
      zoom: 5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    // Agrega un escuchador de eventos de clic al mapa
    this.map.on('click', (event: any) => {
      this.updateMarkerPosition(event.latlng.lat, event.latlng.lng);
    });

    // Crea el marcador y agrégalo al mapa inicialmente
    this.marker = L.marker([-17.3952, -66.1391], { draggable: true }).addTo(this.map);
    this.marker.bindPopup('¡Estás en Cochabamba!').openPopup();
  }

  private updateMarkerPosition(lat: number, lng: number): void {
    // Actualiza la posición del marcador
    this.marker.setLatLng([lat, lng]);

    // Obtener la nueva posición del marcador
    const markerPosition = this.getMarkerPosition();
    console.log('Nueva posición del marcador:', markerPosition);

    // Obtener la dirección basada en la nueva posición
    this.getAddress(lat, lng);
  }

  private getAddress(lat: number, lng: number): void {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

    this.http.get(url).subscribe(
      (data: any) => {
        const objectDireccion = this.extractAddressData(data.address, lat, lng);
        console.log(objectDireccion);

        const streetName = this.getStreetName(objectDireccion);
        this.marker.bindPopup('¡Estás en ' + streetName).openPopup();
        // Puedes hacer algo más con la dirección aquí
      },
      (error) => {
        console.error('Error al obtener la dirección:', error);
      }
    );
  }

  private extractAddressData(address: any, lat: number, lng: number): any {
    const objectDireccion = { ...address, latitude: lat, longitude: lng };
    return objectDireccion;
  }

  private getStreetName(address: any): string {
    return address.road !== undefined
      ? address.road
      : address.city !== undefined
        ? address.city
        : address.state;
  }

  private getMarkerPosition(): { lat: number, lng: number } {
    const markerLatLng = this.marker.getLatLng();
    return { lat: markerLatLng.lat, lng: markerLatLng.lng };
  }

  inputApariencia = INPUT_APARIENCIA;
}
