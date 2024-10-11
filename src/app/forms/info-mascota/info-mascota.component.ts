import { Component, OnInit } from '@angular/core';
import { PetCardComponent } from '../../components/pet-card/pet-card.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../service/api.service'; 


@Component({
  selector: 'app-info-mascota',
  standalone: true,
  imports: [PetCardComponent, CommonModule],
  templateUrl: './info-mascota.component.html',
  styleUrls: ['./info-mascota.component.css'] 
})
export class InfoMascotaComponent implements OnInit {
  pets: any[] = []; 
  rescatistaInfo: any; 
  

  constructor(private apiService: ApiService) { } 

  ngOnInit(): void {
    this.loadPets();
    this.loadRescatista();
  }

  loadPets(): void {
    this.apiService.getMascota().subscribe(
      (data) => {
        this.pets = data; 
      },
      (error) => {
        console.error('Error al cargar las mascotas:', error); 
      }
    );
  }
  loadMascotaInfo() {
    this.apiService.getRescatista().subscribe(
      (info) => {
        console.log(info);
        this.rescatistaInfo = info; 
      },
      (error) => {
        console.error('Error al cargar la información de la mascota:', error);
      }
    );
  }
 
  loadRescatista(): void {
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
}
