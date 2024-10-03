import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdopadorFormComponent } from '../../forms/adopador-form/adopador-form.component';

import { HeaderComponent } from '../../components/header/header.component';
import { AdoptionSectionComponent } from '../../components/adoption-section/adoption-section.component';
import { PetCardComponent } from '../../components/pet-card/pet-card.component';

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
  styleUrls: ['./home.component.css'], // Corrige esto si es necesario
})
export class HomeComponent {
  pets = [
    {
      name: 'Lucas',
      sexo: 'masculino',
      size: 'mediano',
      localizacion: 'Tuxtla, Chiapas',
      image: 'https://www.kivet.com/wp-content/uploads/2023/07/enfermedades-que-transmiten-los-pajaros.jpg',
    },
  ];
  
}

