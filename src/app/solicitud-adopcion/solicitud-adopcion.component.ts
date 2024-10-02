import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solicitud-adopcion',
  standalone: true,
  templateUrl: './solicitud-adopcion.component.html',
  styleUrls: ['./solicitud-adopcion.component.css'],
  imports: [ReactiveFormsModule, CommonModule]  // Correcto
})
export class SolicitudAdopcionComponent implements OnInit {
  solicitudForm: FormGroup;
  adoptadorInfo: any;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.solicitudForm = this.fb.group({
      fechaAdopcion: ['', [Validators.required]],
      localizacion: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    this.loadAdoptadorInfo();
  }

  loadAdoptadorInfo() {
    this.apiService.getAdoptadores().subscribe(
      (info) => {
        console.log(info[0])
        this.adoptadorInfo = info[0];
      },
      (error) => {
        console.error('Error al cargar la información del adoptador:', error);
      }
    );
  }

  onSubmit() {
    if (this.solicitudForm.valid) {
      const solicitudData = {
        ...this.solicitudForm.value,
        adoptadorInfo: this.adoptadorInfo,
      };
      this.apiService.addAdoptadores(solicitudData).subscribe(
        (response) => {
          console.log('Datos enviados a la API:', response);
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
