import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdopadorFormComponent } from '../../forms/adopador-form/adopador-form.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AdoptionSectionComponent } from '../../components/adoption-section/adoption-section.component';
import { PetCardComponent } from '../../components/pet-card/pet-card.component';
import { ApiService } from '../../service/api.service'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AdopadorFormComponent,
    HeaderComponent,
    AdoptionSectionComponent,
    PetCardComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], 
})
export class HomeComponent implements OnInit {
  pets: any[] = [];

  constructor(private apiService: ApiService) {} 

  ngOnInit(): void {
    this.getMascota(); 
  }

  getMascota() {
    this.apiService.getMascota().subscribe(
      (data) => {
        this.pets = data; 
        console.log(this.pets); 
      },
      (error) => {
        console.error('Error al cargar las mascotas:', error);
      }
    );
  }
}
