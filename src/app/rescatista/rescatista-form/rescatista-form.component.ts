import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rescatista-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './rescatista-form.component.html',
  styleUrls: ['./rescatista-form.component.css'],
})
export class RescatistaFormComponent implements OnChanges {
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rescatista'] && this.rescatista) {
      this.rescatistaForm.patchValue({
        nombre: this.rescatista.nombre,
        APaterno: this.rescatista.APaterno,
        AMaterno: this.rescatista.AMaterno,
        numTelefono: this.rescatista.numTelefono,
        correoElectronico: this.rescatista.correoElectronico,
        edad: this.rescatista.edad,
        localizacion: this.rescatista.localizacion,
        tipoRescatista: this.rescatista.tipoRescatista,
      });
      console.log('Datos en el formulario:', this.rescatistaForm.value); 
    }
  }

  actualizarDatos() {
    const edad = this.rescatistaForm.get('edad')?.value;

    if (edad && edad < 18) {
      this.mostrarAlertaEdad();
      return;
    }

    if (this.rescatistaForm.valid) {
      const formData = this.rescatistaForm.value;
      this.apiService.addRescatista(formData).subscribe(
        (response) => {
          Swal.fire('Éxito', 'Rescatista registrado correctamente', 'success');
          console.log('Datos del rescatista enviados a la API:', response);
        },
        (error) => {
          if (error.status === 201) {
            Swal.fire('Éxito', 'Rescatista registrado correctamente', 'success');
          } else {
            console.error('Error al enviar los datos:', error);
            Swal.fire('Error', 'Hubo un problema al registrar el rescatista', 'error');
          }
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }

  mostrarAlertaEdad() {
    Swal.fire({
      title: 'Atención',
      text: 'Debe ser mayor de 18 años. Si eres menor, pide a tus padres que completen el formulario.',
      icon: 'warning',
      confirmButtonText: 'Entendido',
    });
  }
}
