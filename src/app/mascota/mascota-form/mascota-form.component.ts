import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  standalone: true,
  styleUrls: ['./mascota-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
})
export class MascotaFormComponent implements OnInit {
  mascotaForm: FormGroup;
  imagenFile: File | null = null;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      categoria: ['', [Validators.required, Validators.min(0)]],
      tamano: ['', Validators.required],
      sexo: ['', Validators.required],
      padecimiento: ['', Validators.required],
      personalidad: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.imagenFile = target.files[0];
    }
  }

  agregarMascota() {
    if (this.mascotaForm.valid && this.imagenFile) {
      let formData = new FormData();
      var userId = null
      const token = localStorage.getItem('Token');
      if (token) {
        const decodedToken = this.decodeToken(token);
        userId = decodedToken.userId
      }

      Object.keys(this.mascotaForm.value).forEach((key) => {
        formData.append(key, this.mascotaForm.value[key]);
      });

      formData.append('imagen', this.imagenFile);
      formData.append('idRescatista', userId)
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      console.log(formData);
      this.apiService.agregarMascota(formData).subscribe(
        (response) => {
          console.log('Mascota agregada con éxito', response);
        },
        (error) => {
          console.error('Error al agregar la mascota', error);
        }
      );
    } else {
      console.error('Formulario inválido o imagen no seleccionada');
    }
  }
  decodeToken(token: string): any {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  }
}
