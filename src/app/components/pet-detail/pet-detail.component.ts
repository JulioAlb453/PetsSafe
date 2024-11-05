import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pet-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './pet-detail.component.html',
  styleUrl: './pet-detail.component.css',
})
export class PetDetailComponent {
  @Input() mascota: any;
  @Input() rescatista:any;

  get tamano(): string {
    return this.mascota?.tamaño;
  }
  constructor(private apiService: ApiService){

  }
  obtenerMascotas() {
    this.apiService.getMascota().subscribe(
      (mascotas) => {
        console.log(mascotas);
        this.mascota = mascotas;
      },
      (error) => {
        console.error('Error al obtener mascotas', error);
      }
    );
  }
}
