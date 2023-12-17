import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaComponent } from './mapa.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MapaComponent', () => {
  let component: MapaComponent;
  let fixture: ComponentFixture<MapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapaComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente Mapa', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar el mapa', () => {
    expect(component['map']).toBeTruthy();
    expect(component['marker']).toBeTruthy();
  });

  it('debería actualizar la posición del marcador', () => {
    const lat = -17.3945;
    const lng = -66.1571;
    component['updateMarkerPosition'](lat, lng);
    const markerPosition = component['getMarkerPosition']();
    expect(markerPosition.lat).toBe(lat);
    expect(markerPosition.lng).toBe(lng);
  });


  it('debería extraer datos de la dirección', () => {
    const addressData = {
      road: 'Calle Principal',
      city: 'Ciudad',
      state: 'Estado',
      latitude: -17.3945,
      longitude: -66.1571
    };
    const extractedData = component['extractAddressData'](addressData, -17.3945, -66.1571);
    expect(extractedData).toBeTruthy();
    expect(extractedData.latitude).toBe(addressData.latitude);
    expect(extractedData.longitude).toBe(addressData.longitude);
  });

  it('debería obtener el nombre de la calle o ciudad de la dirección', () => {
    const addressData = {
      road: 'Calle Principal',
      city: 'Ciudad',
      state: 'Estado'
    };
    const streetName = component['getStreetName'](addressData);
    expect(streetName).toBe(addressData.road);
  });

  it('debería obtener la posición actual del marcador', () => {
    const markerPosition = component['getMarkerPosition']();
    expect(markerPosition).toBeTruthy();
  });

  it('debería tener definido el objeto inputApariencia', () => {
    expect(component.inputApariencia).toBeDefined();
  });
});
