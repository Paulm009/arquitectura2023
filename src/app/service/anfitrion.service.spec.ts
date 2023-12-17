import { TestBed } from '@angular/core/testing';
import { AnfitrionService } from './anfitrion.service';
import { Plantas } from '../modelos/plantas';

describe('AnfitrionService', () => {
  let service: AnfitrionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnfitrionService]
    });
    service = TestBed.inject(AnfitrionService);
  });

  it('debería ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('debería devolver un Observable vacío si no hay plantas', (done: DoneFn) => {
    service.getCategorias().subscribe((result) => {
      expect(result.length).toBe(0);
      done();
    });
  });
});
