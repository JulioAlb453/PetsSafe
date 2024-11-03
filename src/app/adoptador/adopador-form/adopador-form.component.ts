  import { Component, EventEmitter, Output, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
  import { FormGroup, FormBuilder, Validators } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { ReactiveFormsModule } from '@angular/forms';

  @Component({
    selector: 'app-adoptador-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],  
    templateUrl: './adopador-form.component.html',
    styleUrls: ['./adopador-form.component.css'],
  })
  export class AdopadorFormComponent implements OnInit {
    adoptadorForm: FormGroup;
    @Input() adoptadorData: any;
    @Output() datosEmitidos = new EventEmitter<any>();

    constructor(private fb: FormBuilder) { 
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
      console.log(this.adoptadorData)
      if (this.adoptadorData) {
        this.adoptadorForm.patchValue({
          nombre: this.adoptadorData.nombre,
          AMaterno: this.adoptadorData.AMaterno,
          APaterno: this.adoptadorData.APaterno,
          correoElectronico: this.adoptadorData.correoElectronico,
          numTelefono: this.adoptadorData.numTelefono,
          edad: this.adoptadorData.edad,
        });
        console.log('Datos en el formulario:', this.adoptadorForm.value); 
      }
    }

    ngOnChanges(changes: SimpleChanges): void {
      if (changes['adoptadorData'] && this.adoptadorData) {
        this.adoptadorForm.patchValue({
          nombre: this.adoptadorData.nombre,
          AMaterno: this.adoptadorData.AMaterno,
          APaterno: this.adoptadorData.APaterno,
          correoElectronico: this.adoptadorData.correoElectronico,
          numTelefono: this.adoptadorData.numTelefono,
          edad: this.adoptadorData.edad,
        });
        console.log('Datos en el formulario:', this.adoptadorForm.value); 
      }
    }
  }
