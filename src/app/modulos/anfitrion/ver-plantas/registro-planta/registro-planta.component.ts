import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlantService } from 'src/app/service/plant.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-planta',
  templateUrl: './registro-planta.component.html',
  styleUrls: ['./registro-planta.component.scss']
})
export class RegistroPlantaComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  formRegistro: FormGroup;
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  categoria_id: any;

  constructor(private fb: FormBuilder,
    private plantasService: PlantService,
    private snackBar: MatSnackBar,
    private location: Location,
    private activatedRoute: ActivatedRoute) {
    this.formRegistro = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(32)]],
      description: ['', [Validators.required, Validators.maxLength(256)]],
      img: [null, Validators.required], // Agrega un FormControl para la imgn
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((p: any) => {
      console.log(p);
      this.categoria_id = p.categoriaId;
    });
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.getBase64(file).then((data) => {
        this.previewUrl = data;
      });
    }
  }

  private getBase64(file: File): Promise<string | ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  guardarDatos() {
    console.log("Entra")
    if (this.formRegistro.valid) {
      const datosFormulario = new FormData();
      var file: File = this.selectedFile ? this.selectedFile : new File([""], "foo.txt");
      console.log(file);
      datosFormulario.append('name', this.formRegistro.get('name')?.value);
      datosFormulario.append('description', this.formRegistro.get('description')?.value);
      datosFormulario.append('img', file);
      datosFormulario.append('category_id', this.categoria_id);
      this.plantasService.store(datosFormulario).subscribe(
        (data: any) => {
          if (data) {
            this.showSnackBar('Planta registrada correctamente', 'success');
            this.location.back();
          } else {
            this.showSnackBar('Error al registrar planta', 'error');
          }
          // También puedes enviar la imgn al servidor o realizar otras acciones aquí
        }, errror => {
          this.showSnackBar('Error al registrar planta', 'error');
        });
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
