// modal-publicado
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-publicado',
  templateUrl: './modal-publicado.component.html',
  styleUrls: ['./modal-publicado.component.scss']
})
export class ModalPublicadoComponent {

  constructor(private dialogRef: MatDialogRef<ModalPublicadoComponent>) { }

  confirmarPublicar(): void {
    // Lógica para confirmar la publicacion
    // ...

    // Cierra el modal después de la confirmación
    this.dialogRef.close(true);
  }

  cerrarModal(): void {
    // Cierra el modal sin confirmar la publicacion
    this.dialogRef.close(false);
  }
}
