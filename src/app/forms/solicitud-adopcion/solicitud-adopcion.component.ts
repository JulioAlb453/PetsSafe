import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Importa Router para redireccionar

@Component({
  selector: 'app-solicitud-adopcion',
  standalone: true,
  templateUrl: './solicitud-adopcion.component.html',
  styleUrls: ['./solicitud-adopcion.component.css'],
  imports: [ReactiveFormsModule, CommonModule]  
})
export class SolicitudAdopcionComponent implements OnInit {
  solicitudForm: FormGroup;
  adoptadorInfo: any;
  loading: boolean = false; // Estado de carga
  errorMessage: string | null = null; // Mensaje de error

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { // Inyecta Router
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
        console.log(info[0]);
        this.adoptadorInfo = info[0];
      },
      (error) => {
        console.error('Error al cargar la información del adoptador:', error);
      }
    );
  }

  onSubmit() {
    if (this.solicitudForm.valid) {
      this.loading = true; // Activa el estado de carga
      const solicitudData = {
        ...this.solicitudForm.value,
        adoptadorInfo: this.adoptadorInfo,
      };
      this.apiService.addSolicitud(solicitudData).subscribe(
        (response) => {
          console.log('Datos enviados a la API:', response);
          this.loading = false; // Desactiva el estado de carga
          // Resetea el formulario o redirige
          this.solicitudForm.reset();
          this.router.navigate(['/success']); // Cambia a la ruta deseada
        },
        (error) => {
          console.error('Error al enviar los datos:', error);
          this.loading = false; // Desactiva el estado de carga
          this.errorMessage = 'Hubo un problema al enviar la solicitud. Intenta de nuevo.'; // Establece mensaje de error
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}
