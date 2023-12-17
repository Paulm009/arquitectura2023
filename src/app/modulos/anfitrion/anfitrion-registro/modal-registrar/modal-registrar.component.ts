import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-modal-registrar',
  templateUrl: './modal-registrar.component.html',
  styleUrls: ['./modal-registrar.component.scss']
})
export class ModalRegistrarComponent {

  constructor(private dialogRef: MatDialogRef<ModalRegistrarComponent>) { }

  confirmarRegistro(): void {
    // Lógica para confirmar la eliminación
    // ...

    // Cierra el modal después de la confirmación
    this.dialogRef.close(true);
  }

  cerrarModal(): void {
    // Cierra el modal sin confirmar la eliminación
    this.dialogRef.close(false);
  }

}
