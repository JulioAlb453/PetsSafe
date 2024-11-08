import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicitud-adopcion',
  standalone: true,
  templateUrl: './solicitud-adopcion.component.html',
  styleUrls: ['./solicitud-adopcion.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class SolicitudAdopcionComponent implements OnInit {
  rescatistaForm: FormGroup;
  idMascota: any;
  idRescatista: any;
  @Input() mascota: any;
  rescatista: any;
  idAdoptador: any;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.rescatistaForm = this.fb.group({
      fechaAdopcion: ['', Validators.required],
      localizacion: ['', Validators.required],
      motivoAdopcion: ['', Validators.required],
      tipoHogar: ['', Validators.required],
      experienciaMascotas: ['', Validators.required],
      personasEnHogar: ['', Validators.required],
      niñosEnHogar: ['', Validators.required],
      trabajoDesdeCasa: ['', Validators.required],
      tiempoDisponible: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.submitSolicitud();
    this.route.paramMap.subscribe((params) => {
      this.idMascota = params.get('id');
      console.log('ID de la mascota:', this.idMascota);
      this.loadMascota();
      this.getIdAdoptador();
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
    this.loadMascota();
  }

  getIdAdoptador() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.decodeToken(token);
      this.idAdoptador = decodedToken.userId;
    }
  }

  loadMascota() {
    this.apiService.getMascotaById(this.idMascota).subscribe(
      (data) => {
        this.mascota = data;
        this.idRescatista = this.mascota.idRescatista;
        console.log(this.mascota);
        this.getRescatista();
      },
      (error) => {
        console.error('Error al cargar las mascotas:', error);
      }
    );
  }
  getRescatista() {
    if (this.idRescatista) {
      this.apiService.getRescatistaById(this.idRescatista).subscribe(
        (data) => {
          console.log('Datos del rescatista:', data);
          this.rescatista = data;
        },
        (error) => {
          console.error('Error al cargar los datos del rescatista:', error);
        }
      );
    } else {
      console.error('userId es nulo');
    }
  }

  get tamano(): string {
    return this.mascota?.tamaño;
  }
  submitSolicitud() {
    if (this.rescatistaForm.valid) {
      const solicitudData = {
        fechaAdopcion: this.rescatistaForm.value.fechaAdopcion,
        localizacion: this.rescatistaForm.value.localizacion,
        motivoAdopcion: this.rescatistaForm.value.motivoAdopcion,
        tipoHogar: this.rescatistaForm.value.tipoHogar,
        experienciaMascotas: this.rescatistaForm.value.experienciaMascotas,
        personasEnHogar: this.rescatistaForm.value.personasEnHogar,
        niñosEnHogar: this.rescatistaForm.value.niñosEnHogar,
        trabajoDesdeCasa: this.rescatistaForm.value.trabajoDesdeCasa,
        tiempoDisponible: this.rescatistaForm.value.tiempoDisponible,
        idMascota: this.idMascota,
        idRescatista: this.rescatista.id,
        idAdoptador: this.idAdoptador,
      };

      this.apiService.addSolicitud(solicitudData).subscribe(
        (response) => {
          Swal.fire({
            title: "Solicitud enviada",
            icon: 'success',
            showConfirmButton: false,
            timer: 1300,
          })
        },
        (error) => {
          Swal.fire ({
            title: "Ha ocurrido un error",
            icon: error,
            showConfirmButton: false,
            timer: 1300,
          })
        }
      );
    }
  }

  decodeToken(token: string): any {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  }
}
