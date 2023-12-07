import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-content">
          <p>Información de contacto</p>
          <p>Dirección: <a href="https://maps.app.goo.gl/6hmEDtxcs8rx3oot7" target="_blank">C. R. Rivero Torrez 1630, Muyurina, Cochabamba, Bolivia</a></p>
          <p>Email: <a href="mailto:informaciones.jardin.botanico@gmail.com" target="_blank">informaciones.jardin.botanico@gmail.com</a></p>
          <p>Teléfono: <a href="https://api.whatsapp.com/send?phone=+59162998028&text=Hola,%20estoy%20interesado%20en%20contactarte." target="_blank">+591 62998028</a></p>
        </div>
        <div class="footer-social">
          <h3>Síguenos</h3>
          <ul class="social-links">
            <li><a href="https://www.facebook.com/profile.php?id=100078017859101">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `
})
class FooterComponent {}

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
  });

  it('debería tener un footer con la clase "site-footer"', () => {
    const footerElement = fixture.nativeElement.querySelector('footer.site-footer');
    expect(footerElement).toBeTruthy();
  });

  it('debería contener información de contacto', () => {
    const contactInfo = fixture.nativeElement.querySelectorAll('.footer-content p');
    expect(contactInfo.length).toBe(4);
  });

  it('debería contener enlaces a redes sociales', () => {
    const socialLinks = fixture.nativeElement.querySelectorAll('.footer-social ul.social-links li a');
    expect(socialLinks.length).toBe(3);
  });

  it('debería tener un enlace a Facebook', () => {
    const facebookLink = fixture.nativeElement.querySelector('.footer-social ul.social-links li:nth-child(1) a');
    expect(facebookLink.href).toContain('https://www.facebook.com/profile.php?id=100078017859101'); 
  });

  it('debería tener un enlace a Twitter', () => {
    const twitterLink = fixture.nativeElement.querySelector('.footer-social ul.social-links li:nth-child(2) a');
    expect(twitterLink.href).toContain('#'); 
  });

  it('debería tener un enlace a Instagram', () => {
    const instagramLink = fixture.nativeElement.querySelector('.footer-social ul.social-links li:nth-child(3) a');
    expect(instagramLink.href).toContain('#'); 
  });
});
