import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  standalone: true,
  styleUrls: ['./mascota-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterLink]
})
export class MascotaFormComponent implements OnInit {
  mascotaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      tamano: ['', Validators.required],
      sexo: ['', Validators.required],
      padecimiento: ['']
    });
  }

  ngOnInit(): void {}

  agregarMascota() {
    if (this.mascotaForm.valid) {
      // Lógica para agregar la mascota
      console.log(this.mascotaForm.value);
    }
  }
}
