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
  rescatistaInfo: any; 
  mascotaInfo: any; 
  loading: boolean = false; 
  errorMessage: string | null = null; 

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { 
    this.solicitudForm = this.fb.group({
      fechaAdopcion: ['', [Validators.required]],
      localizacion: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    this.loadRescatistaInfo();
    this.loadMascotaInfo();
  }

  loadRescatistaInfo() {
    this.apiService.getRescatista().subscribe(
      (info) => {
        console.log(info);
        this.rescatistaInfo = info; 
      },
      (error) => {
        console.error('Error al cargar la información del rescatista:', error);
      }
    );
  }

  loadMascotaInfo() {
    this.apiService.getMascota().subscribe(
      (info) => {
        console.log(info);
        this.mascotaInfo = info; 
      },
      (error) => {
        console.error('Error al cargar la información de la mascota:', error);
      }
    );
  }

  onSubmit() {
    if (this.solicitudForm.valid) {
      this.loading = true; 
      const solicitudData = {
        ...this.solicitudForm.value,
        rescatista: this.rescatistaInfo,
        mascota: this.mascotaInfo,
      };
      this.apiService.addSolicitud(solicitudData).subscribe(
        (response) => {
          console.log('Datos enviados a la API:', response);
          this.loading = false; 
          this.solicitudForm.reset(); 
          this.router.navigate(['/success']); 
        },
        (error) => {
          console.error('Error al enviar los datos:', error);
          this.loading = false;
          this.errorMessage = 'Hubo un problema al enviar la solicitud. Intenta de nuevo.';   
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}
