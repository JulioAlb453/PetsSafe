// donacion.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-donacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.css'],
})
export class DonacionComponent implements OnInit {
  donacionForm: FormGroup;
  mascotas : any[] =[];
  idRescatista: any;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.donacionForm = this.fb.group({
      idMascota: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(1)]],
      mensaje: [''],
    });
  }

  ngOnInit(): void {
    this.obtenerMascotas();
  }

  obtenerMascotas() {
    this.apiService.getMascota().subscribe(
      (mascotas) => {
        console.log(mascotas);
        this.mascotas = mascotas;
      },
      (error) => {
        console.error('Error al obtener mascotas', error);
      }
    );
  }

  enviarDonacion() {
    if (this.donacionForm.valid) {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = this.decodeToken(token);
        const userId = decodedToken.userId;

        const donacion = {
          idAdoptador: userId,
          idMascota: this.donacionForm.get('idMascota')?.value,
          idRescescatista: this.idRescatista,
          monto: this.donacionForm.get('monto')?.value,
          mensaje: this.donacionForm.get('mensaje')?.value,
        };

        this.apiService.addDonacion(donacion).subscribe(
          (response) => {
            Swal.fire({
              title: "donacion exitosa",
              icon: 'success',
              showConfirmButton: false,
              timer: 1300,
            })
            this.donacionForm.reset();
          },
          (error) => {
            Swal.fire ({
              title: "Ha ocurrido un error",
              icon: error,
              showConfirmButton: false,
              timer: 1300,
            })
            console.error('Error al realizar la donación', error);
          }
        );
      }
    }
  }
  getRescatista() {
    if (this.idRescatista) {
      this.apiService.getRescatistaById(this.idRescatista).subscribe(
        (data) => {
          console.log('Datos del rescatista:', data);
          this.idRescatista = data;
        },
        (error) => {
          console.error('Error al cargar los datos del rescatista:', error);
        }
      );
    } else {
      console.error('userId es nulo');
    }
  }

  decodeToken(token: string): any {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  }
}
