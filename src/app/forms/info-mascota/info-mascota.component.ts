import { Component, OnInit } from '@angular/core';
import { PetCardComponent } from '../../components/pet-card/pet-card.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../service/api.service'; // Asegúrate de importar el servicio
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-mascota',
  standalone: true,
  imports: [PetCardComponent, CommonModule],
  templateUrl: './info-mascota.component.html',
  styleUrls: ['./info-mascota.component.css'] // Corrige aquí para 'styleUrls'
})
export class InfoMascotaComponent implements OnInit {
  pets: any[] = []; // Inicializa como un array vacío

  constructor(private apiService: ApiService) { } // Inyecta ApiService

  ngOnInit(): void {
    this.loadPets();
  }

  loadPets(): void {
    this.apiService.getMascota().subscribe(
      (data) => {
        this.pets = data; // Asigna los datos obtenidos a la variable 'pets'
      },
      (error) => {
        console.error('Error al cargar las mascotas:', error); // Manejo de errores
      }
    );
  }
}
