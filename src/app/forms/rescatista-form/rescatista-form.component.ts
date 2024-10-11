import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-rescatista-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './rescatista-form.component.html',
  styleUrls: ['./rescatista-form.component.css'],
})
export class RescatistaFormComponent {
  @Input() rescatista: any;
  rescatistaForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.rescatistaForm = this.fb.group({
      nombre: ['', Validators.required],
      APaterno: ['', Validators.required],
      AMaterno: ['', Validators.required],
      numTelefono: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      edad: ['', Validators.required],
      localizacion: ['', Validators.required],
      tipoRescatista: ['', Validators.required],
    });
  }

  actualizarDatos() {
    if (this.rescatistaForm.valid) {
      const formData = this.rescatistaForm.value;
      this.apiService.addRescatista(formData).subscribe(
        (response) => {
          console.log('Datos del rescatista enviados a la API:', response);
          
        },
        (error) => {
          console.error('Error al enviar los datos:', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}
