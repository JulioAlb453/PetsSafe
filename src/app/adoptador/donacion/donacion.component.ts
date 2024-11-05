// donacion.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
      const token = localStorage.getItem('Token');
      if (token) {
        const decodedToken = this.decodeToken(token);
        const userId = decodedToken.userId;

        const donacion = {
          idAdoptador: userId,
          idMascota: this.donacionForm.get('idMascota')?.value,
          monto: this.donacionForm.get('monto')?.value,
          mensaje: this.donacionForm.get('mensaje')?.value,
        };

        this.apiService.addDonacion(donacion).subscribe(
          (response) => {
            alert('Donación realizada con éxito');
            this.donacionForm.reset();
          },
          (error) => {
            console.error('Error al realizar la donación', error);
          }
        );
      }
    }
  }

  decodeToken(token: string): any {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  }
}
