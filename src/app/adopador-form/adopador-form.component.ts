import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adoptador-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],  
  templateUrl: './adopador-form.component.html',
  styleUrls: ['./adopador-form.component.css'],
})
export class AdopadorFormComponent {
  adoptadorForm: FormGroup;
  @Output() datosEmitidos = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.adoptadorForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      APaterno: ['', [Validators.required, Validators.minLength(4)]],
      AMaterno: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      numTelefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
    });
  }

  onSubmit() {
    if (this.adoptadorForm.valid) {
      console.log('Formulario Enviado:', this.adoptadorForm.value);
      this.datosEmitidos.emit(this.adoptadorForm.value); // Emitir los datos
    } else {
      console.log('Formulario no válido');
    }
  }
}