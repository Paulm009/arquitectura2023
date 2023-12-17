import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VideoService } from 'src/app/service/video.service';
import { Location } from '@angular/common';


// ... importaciones

@Component({
  selector: 'app-registrar-video',
  templateUrl: './registrar-video.component.html',
  styleUrls: ['./registrar-video.component.scss']
})
export class RegistrarVideoComponent implements OnInit {
  formRegistro: FormGroup;

  constructor(
    private videoService: VideoService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.formRegistro = this.fb.group({
      iframeCode: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  guardarDatos() {
    console.log(this.formRegistro.value);
    if (this.formRegistro.valid) {
      const iframeCode = this.formRegistro.get('iframeCode')?.value?.trim();

      if (iframeCode) {
        const datosFormulario = new FormData();
        datosFormulario.append('iframe_code', iframeCode);

        this.videoService.store(datosFormulario).subscribe(
          (data: any) => {
            if (data) {
              this.showSnackBar('Video registrado correctamente', 'success');
              this.location.back();
            } else {
              this.showSnackBar('Error al registrar el video', 'error');
            }
          },
          (error: any) => {
            console.log(error);
            this.showSnackBar('Error al registrar el video', 'error');
          }
        );
      } else {
        this.showSnackBar('El código del iframe no puede estar vacío', 'error');
      }
    }
  }

  private showSnackBar(message: string, panelClass: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [panelClass],
    });
  }

}

