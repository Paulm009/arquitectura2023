// modal-eliminar.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.scss']
})
export class ModalEliminarComponent {

  constructor(private dialogRef: MatDialogRef<ModalEliminarComponent>) { }

  confirmarEliminar(): void {
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
