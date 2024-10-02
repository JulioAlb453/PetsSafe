import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-adopador-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],  // Asegúrate de importar CommonModule
  templateUrl: './adopador-form.component.html',
  styleUrls: ['./adopador-form.component.css'],
})
export class AdopadorFormComponent {
  adoptadorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.adoptadorForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      numTelefono: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
    });
  }

  onSubmit() {
    if (this.adoptadorForm.valid) {
      console.log('Formulario Enviado:', this.adoptadorForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
