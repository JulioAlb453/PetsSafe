import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../service/api.service'; 

@Component({
  selector: 'app-adoptador-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],  
  templateUrl: './adopador-form.component.html',
  styleUrls: ['./adopador-form.component.css'],
})
export class AdopadorFormComponent implements OnInit {
  adoptadorForm: FormGroup;
  adoptadorId: string | null = null;
  @Output() datosEmitidos = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private apiService: ApiService) { 
    this.adoptadorForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      APaterno: ['', [Validators.required, Validators.minLength(4)]],
      AMaterno: ['', [Validators.required, Validators.minLength(4)]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      numTelefono: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
    });
  }

  ngOnInit(): void {
    this.cargarDatosAdoptador();
  }

  cargarDatosAdoptador(): void {
    this.apiService.getAdoptadores().subscribe(
      (data) => {
        const adoptador = data[1]; 
        this.adoptadorForm.patchValue({
          nombre: adoptador.nombre,
          APaterno: adoptador.APaterno,
          AMaterno: adoptador.AMaterno,
          correoElectronico: adoptador.correoElectronico,
          numTelefono: adoptador.numTelefono,
          edad: adoptador.edad,
        });
      },
      (error) => {
        console.error('Error al cargar los datos del adoptador:', error);
      }
    );
  }
  modificarAdoptador(): void {
    if (this.adoptadorForm.valid && this.adoptadorId) {
      this.apiService.updateAdoptador(this.adoptadorId, this.adoptadorForm.value).subscribe(
        (response) => {
          console.log('Datos del adoptador modificados con éxito', response);
          this.datosEmitidos.emit(this.adoptadorForm.value); 
        },
        (error) => {
          console.error('Error al modificar los datos del adoptador', error);
        }
      );
    } else {
      console.log('Formulario no válido o falta el ID del adoptador');
    }
  }

  onSubmit() {
    if (this.adoptadorForm.valid) {
      this.apiService.addAdoptador(this.adoptadorForm.value).subscribe(
        (response) => {
          console.log('Datos del adoptador enviados con éxito', response);
          this.datosEmitidos.emit(this.adoptadorForm.value); 
        },
        (error) => {
          console.error('Error al enviar los datos del adoptador', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}
