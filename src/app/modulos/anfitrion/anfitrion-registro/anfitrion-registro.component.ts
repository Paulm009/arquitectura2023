import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CategoryService } from 'src/app/service/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';


@Component({
  selector: 'app-anfitrion-registro',
  templateUrl: './anfitrion-registro.component.html',
  styleUrls: ['./anfitrion-registro.component.scss']
})
export class AnfitrionRegistroComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  formRegistro: FormGroup; 
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder,
              private categoryService: CategoryService,
              private snackBar: MatSnackBar,
              private location: Location) {
    this.formRegistro = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(32)]],
      description: ['', [Validators.required, Validators.maxLength(256)]],
      img: [null, Validators.required], // Agrega un FormControl para la imagen
    });
  }

  ngOnInit() {}

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
    if (this.formRegistro.valid) {
      const datosFormulario = this.formRegistro.value;
      let formData = new FormData();
      var file:File = this.selectedFile?this.selectedFile: new File([""], "foo.txt");
      console.log(file);
      formData.append('name', datosFormulario.name);
      formData.append('description', datosFormulario.description);
      formData.append('img', file);
      console.log(formData.get('img'));
      this.categoryService.store(formData).subscribe(
        (data:any) => {
        console.log(data);
        if(data){
          this.showSnackBar('Registro exitoso', 'success');
          this.location.back();
        }else{
          this.showSnackBar('Error al registrar', 'error');
        }
      }, error => {
        console.log(error);
        this.showSnackBar('Error inesperado al registrar', 'error');
      }

      );
      console.log('Datos del formulario:', datosFormulario);

      // También puedes enviar la imagen al servidor o realizar otras acciones aquí
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
